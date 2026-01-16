"use client";
import Link from "next/link";
import Tableloader from "@functions/tableloader";
import { useState, useEffect, useCallback } from "react";
import DataTable from "react-data-table-component";
import { format } from "date-fns";
import { alert as customAlert } from "@functions/alertmessage"; 


const VIEW_API_URL = `/api/contacts`;

const ViewEnquiries = () => { 
const [columns, setColumns] = useState([]);
const [gridData, setGridData] = useState([]); 
const [loader, setLoader] = useState(true);


  const getGridData = useCallback(async () => {
    setLoader(true);
    

    const payload = {
      switchOption: 'ManageContactUs',
      option: 'selectall',
    };
    
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value);
    });

    try {
      const response = await fetch(VIEW_API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const finalData = data.resData && Array.isArray(data.resData) ? data.resData : [];
      if (finalData.length > 0) {
        setGridData(finalData[0]);
        createColumns(finalData[0]);
      } else {
        setGridData([]);
        setColumns([]);
      }
    } catch (error) {
        console.error("Error fetching enquiries data:", error);
        customAlert("Failed to load enquiries. Please try again.", "error"); 
        setGridData([]);
        setColumns([]);
    } finally {
      setLoader(false);
    }
  }, []); 

  
  useEffect(() => {
    getGridData();
  }, [getGridData]); 


  const createColumns = (data) => {
    if (!data || data.length === 0) return;

    const newColumns = [
        { name: "Date", selector: row => row.created_at ? format(new Date(row.created_at), 'dd-MMM-yyyy') : 'NA', wrap: true ,sortable: true,},
       
        { name: "Name", selector: row => row.name, width: '10%', wrap: true },
        { name: "Mobile", selector: row => row.mobile, width: '15%', wrap: true },
        { name: "Email", selector: row => row.email, width: '15%', wrap: true },
        { name: "Subject", selector: row => row.subject, width: '15%', wrap: true },
        {
            name: "Enquiry",
            selector: row => row.enquiry,
            width: '20%',
            wrap: true,
            cell: row => (
                <div className="scrolldiv">
                    {row.enquiry}
                </div>
            ),
        },
        {
            name: 'Action',
            center: "true",
            width: '70px',
            wrap:true,
            cell: row => (
                <div className="action">
                    <a className="m-1" role="button" onClick={() => gridRow_Delete(row.id)}>
                        <i className="iconDelete" title="Delete"></i>
                    </a>
                </div>
            ),
        }
    ];
    setColumns(newColumns);
  };


  const gridRow_Delete = async (srno) => {
    const isConfirm = confirm('Are you sure you want to delete this event?') === true;

    if (isConfirm) {
      const formData = new FormData();
      formData.append('switchOption', 'ManageContactUs');
      formData.append('option', 'delete');
      formData.append('srno', srno);

      try {
        const response = await fetch(VIEW_API_URL, {
          method: 'POST',
          body: formData
        });
        const data = await response.json();

        if (data.resData === 'success') {
          customAlert("Deleted Successfully", "success");
          getGridData(); 
        } else {
          customAlert(data.message || "Failed to delete document.", "error");
        }
      } catch (error) {
        console.error("Error deleting document:", error);
        customAlert("Failed to delete. Please try again.", "error");
      }
    }
  };


  return (
    <div className="adminCmnWrap">
      <div className="admnHead">
        <h2>View Contact Us</h2> 
      </div>
      <div className="AdminDataTbl">
            {
                loader ? (
                    <Tableloader rows={10} columns={8} />
                ) : (
                    (Array.isArray(gridData) && gridData?.length > 0)
                        ? <DataTable
                            columns={columns}
                            data={gridData}
                            noDataComponent="No Data Found."
                            pagination
                            responsive
                        />
                        : <DataTable noDataComponent="No Data Found." />
                )}
      </div>
    </div>
  );
};

export default ViewEnquiries;
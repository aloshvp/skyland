"use client";
import Link from "next/link";
import Tableloader from "@functions/tableloader";
import { useState, useEffect, useCallback } from "react";
import DataTable from "react-data-table-component";
import { format } from "date-fns";
import { alert as customAlert } from "@functions/alertmessage"; 


const VIEW_API_URL = `/api/careers`;

const ViewCareers = () => { 
const [columns, setColumns] = useState([]);
const [gridData, setGridData] = useState([]); 
const [loader, setLoader] = useState(true);


  const getGridData = useCallback(async () => {
    setLoader(true);
    

    const payload = {
      switchOption: 'ManageApplications',
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
        { name: "Date", selector: row => row.created_date ? format(new Date(row.created_date), 'dd-MMM-yyyy') : 'NA', wrap: true },
        { name: "First Name", selector: row => row.first_name, width: '10%', wrap: true },
        { name: "Last Name", selector: row => row.last_name, width: '10%', wrap: true },
        { name: "Phone", selector: row => row.phone, width: '5%', wrap: true },
        { name: "Email", selector: row => row.email, width: '10%', wrap: true },
        { name: "Location", selector: row => row.location, width: '10%', wrap: true },
        {
            name: "Expertise",
            selector: row => row.expertise,
            width: '20%',
            wrap: true,
            cell: row => (
                <div className="scrolldiv">
                    {row.expertise}
                </div>
            ),
        },
        {
            name: "Cover Letter",
            selector: row => row.coverletter,
            width: '10%',
            wrap: true,
            cell: row => (
                <div className="scrolldiv">
                    {row.coverletter}
                </div>
            ),
        },
        {
            name: "File",
            center: "true",
            width: '70px',
            wrap:true,
            cell: row => (
                row.resume_file_path ? (
                    <a
                        href={`/api/assets/careers/${row.resume_file_path}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="iconEye" title="View"></i>
                    </a>
                ) : (
                    <i
                        className="iconEye not"
                        title="No file available"
                        style={{ cursor: "not-allowed", pointerEvents: "none" }}
                    ></i>
                )
            )
        },
        {
            name: 'Action',
            center: "true",
            width: '70px',
            wrap:true,
            cell: row => (
                <div className="action">
                    <a className="m-1" role="button" onClick={() => gridRow_Delete(row.srno)}>
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
      formData.append('switchOption', 'ManageApplications');
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
        <h2>View Careers</h2> 
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

export default ViewCareers;
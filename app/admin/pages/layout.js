
import AdminMaster from "../components/AdminMaster";
import { getSession } from "@lib/auth";
import { redirect } from "next/navigation";
import { ClientUpdateSessionCtrl } from "../components/ClientupdateSession";

export default  async function AdminLayout({ children }) {
    const session = await getSession();

    if (!session) {
        redirect('/admin/login');
    }
    return (
     <>
      <AdminMaster>{ children }</AdminMaster>
      <ClientUpdateSessionCtrl/>   
     </>
    );
}
'use client';
import '@styles/admin.css';
import AdminLeftMenu from './AdminLeftMenu';
import { usePathname,useRouter } from 'next/navigation';
import { useState } from 'react';
import { logout } from '@lib/auth';
import Image from 'next/image';

const AdminMaster = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const isWelcomePage = pathname.toLowerCase() === '/admin/pages/welcome';
    const [openClose,setOpenClose]=useState(true);

    const handleLogoutClick = async (e) => {
        e.preventDefault();
        await logout();
        alert('Logged Out!');
        router.push('/admin/login');
    };




    return (
        <>
            <header className="header">
                <div className="header-left">
                    <h1>Admin Dashboard</h1>
                </div>
                <div className="header-right">
                    <div className="user-profile">
                        <div className="user-icon"></div> 
                        
                        <div className="logout-menu">
                            {/* <a href="#settings">Settings</a> */}
                            <a onClick={handleLogoutClick} >Logout</a>
                        </div>
                    </div>
                </div>
                <em onClick={()=>setOpenClose(!openClose)}><Image src={'/images/admin/menu.svg'} width={24} height={24} className="img-fluid" alt="menu" title="menu"/></em>
            </header>
            <div className="dashboard-layout">
                <AdminLeftMenu flag={openClose}/>
                <main className={(openClose)?'main-content pushed':'main-content'}>
                    {children}
                </main>
            </div>
        </>
    );
}

export default AdminMaster
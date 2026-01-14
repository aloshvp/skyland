'use client';

import { logout } from "@lib/auth"; 
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useWindowSize from "@common/useWindowSize";

const AdminLeftMenu = ({flag}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeParentOrder, setActiveParentOrder] = useState(null);
  const [activeSubHref, setActiveSubHref] = useState(null);
  const size=useWindowSize();

  const [AdminMenuData] = useState([
    {
      name: 'General', href: '', order: "0",
      submenu: [
        { name: 'Careers', href: 'view-careers', order: "0.1" },
        { name: 'Contact Enquiries', href: 'enquiries', order: "0.2" },
      ]
    },
  ]);


  const findActiveMenuByPath = (menuData, path) => {
    let parentOrder = null;
    let subHref = null;
    
  
    const actualUrl = path.split('/admin/pages/')[1] || '';

    for (const menu of menuData) {
      if (menu.submenu) {
        for (const sub of menu.submenu) {
          if (sub.href && actualUrl === sub.href) {
            parentOrder = menu.order; 
            subHref = sub.href;
            return { parentOrder, subHref };
          }
        }
      }
     
      if (menu.href && actualUrl === menu.href) {
         parentOrder = menu.order;
         subHref = menu.href;
         return { parentOrder, subHref };
      }
    }
    

    
    return { parentOrder: null, subHref: null };
  };

  useEffect(() => {
    const { parentOrder, subHref } = findActiveMenuByPath(AdminMenuData, pathname);
    setActiveParentOrder(parentOrder);
    setActiveSubHref(subHref);

  }, [pathname, AdminMenuData]);


  const parentMenuClick = (order) => {
    if (order === activeParentOrder) {
      setActiveParentOrder(null);
    } else {
      setActiveParentOrder(order);
    }
  };

  const subMenuClick = (e, order, href) => {
    e.stopPropagation(); 
   
    setActiveParentOrder(order?.split(".")[0]); 
    setActiveSubHref(href);
    
    if (href) {
      const baseUrl = '/' ||''; 
      router.push(`/admin/pages/${href}`); 
    }
  };




  return (
    // <>
    //   <div className="cssmenuad">
    //     <ul>
    //       {AdminMenuData.map((val, index) => (
    //         <li 
    //           key={index} 
    //           onClick={() => parentMenuClick(val.order)} 
    //           className={`${val?.submenu ? "has-sub" : ""} ${val.order === activeParentOrder ? "open" : ""}`}
    //         >
    //           <a>{val.name}</a>
    //           {val?.submenu && (
    //             <ul className={val.order === activeParentOrder ? "open" : ""}>
    //               {val.submenu.map((sub, subIndex) => (
    //                 <li key={subIndex} onClick={(e) => subMenuClick(e, sub.order, sub.href)}>
    //                   <a className={activeSubHref === sub.href ? "active" : ""}>
    //                       {sub.name}
    //                   </a>
    //                 </li>
    //               ))}
    //             </ul>
    //           )}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className="adminlgout">
    //     <a href=":" onClick={handleLogoutClick}>Logout</a>
    //   </div>
    // </>
    <>
      <aside className={(size?.width>=767)?((flag)?"sidebar open":"sidebar"):((flag)?"sidebar":"sidebar open")}>
            <nav className="menu">
              <ul>
                {AdminMenuData.map((val, index) => (
                <li key={index} 
                    onClick={() => parentMenuClick(val.order)} 
                    className={`${val?.submenu ? "has-sub" : ""} ${val.order === activeParentOrder ? "open" : ""}`}
                    >
                  <a>{val.name}</a>
                  {val?.submenu && (
                    <ul className={val.order === activeParentOrder ? "admin-submenu open" : "admin-submenu"}>
                        {val.submenu.map((sub, subIndex) => (
                        <li key={subIndex} onClick={(e) => subMenuClick(e, sub.order, sub.href)}>
                              <a className={activeSubHref === sub.href ? "active" : ""}>
                                {sub.name}
                          </a>
                          </li>
                        ))}
                    </ul>
                      )}
                </li>
                  ))}
              </ul>
            </nav>
        </aside>
    </>
  );
};

export default AdminLeftMenu;
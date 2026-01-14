"use client";


import dynamic from "next/dynamic";
import { Suspense } from "react";
import AOSInit from "@common/AOSInit";
import Header from "@common/Header";
import { usePathname } from "next/navigation";

const Footer = dynamic(() => import("@common/Footer"), {
    ssr: false,
});

export default function ClientLayoutWrapper({ children }) {

    const pathname = usePathname();
    const isAdmin = pathname.startsWith("/admin");
    const showLayout = !isAdmin;



    return (
        <>
            {/* <PageClassProvider> */}
            <AOSInit />
            {showLayout && <Header />}

            <main>
                {children}
            </main>

            {showLayout && <Footer />}
            {/* </PageClassProvider> */}
        </>
    );
}

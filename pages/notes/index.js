import Breadcrumbs from "@/app/componentes/Breadcrumbs";
import React from "react";
import NavBar from "@/app/componentes/NavBar";
import Link from "next/link";

const indexNotes = () => {
    return(
        <div>
            <NavBar></NavBar>
            <Breadcrumbs></Breadcrumbs>
            <Link href="../notes/all-notes" target="_self" rel="next">
            <h1>All-Notes</h1>
            </Link>

        </div>
    )
}

export default indexNotes;
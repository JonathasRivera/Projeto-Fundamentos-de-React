import Breadcrumbs from "@/app/componentes/Breadcrumbs";
import NavBar from "@/app/componentes/NavBar";
import React from "react";

const Allnotes = () => {
    return(
        <div>
            <NavBar></NavBar>
            <Breadcrumbs></Breadcrumbs>
            <h1>Aqui é o index, que fica a pasta Notes!</h1>
        </div>
    )
}


export default Allnotes;

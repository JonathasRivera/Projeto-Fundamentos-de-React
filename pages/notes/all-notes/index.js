import Breadcrumbs from "../../../src/app/componentes/Breadcrumbs";
import NavBar from "../../../src/app/componentes/NavBar";
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

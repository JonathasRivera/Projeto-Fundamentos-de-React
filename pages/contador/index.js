import Breadcrumbs from "../../src/app/componentes/Breadcrumbs";
import Button from "../../src/app/componentes/Button";
import NavBar from "../../src/app/componentes/NavBar";
import React, {useState} from "react";
import './styles.css';

const ContadorApp = () => {

    let [contador, setContador] = useState(100);

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    return( 
        <div>
            <NavBar></NavBar>
            <Breadcrumbs></Breadcrumbs>
            <h1>Aqui é o Contador usando useState!</h1>

            <p>Contagem: {contador} </p>

            <button 
                onClick={incrementar}
                className="h-12 bg-gradient-to-r from-yellow-500 to-red-700 text-white font-bold py-2 px-4 rounded">
                Incrementar
            </button>
            <button 
                onClick={decrementar}
                className="h-12 bg-gradient-to-r from-yellow-500 to-red-700 text-white font-bold py-2 px-4 rounded">
                Decrementar
            </button>


        </div>
    )
}

export default ContadorApp;
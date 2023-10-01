import React from "react";

function Button({ children }){
    return (
        <button className="h-14 bg-gradient-to-r from-yellow-500 to-red-700 text-white font-bold py-2 px-4 rounded">
            {children}
        </button>
    )
}

export default Button;
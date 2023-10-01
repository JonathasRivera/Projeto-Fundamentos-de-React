import Link from "next/link";
import React from "react";

function NavBar(){
    const navItems = [
        {label: 'Home', path: '/'},
        {label: 'Contador', path: '/contador'},
        {label: 'Eventos', path: '/eventos'},
        {label: 'Novidades', path: '/novidades'}
    ]

    return (
        <nav className="h-14 bg-gradient-to-r from-yellow-500 to-red-500">
            <ul className="flex space-x-4">
                {navItems.map((item, index) => ( 
                    <li key={index}>
                        <Link href={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}                
            </ul>
        </nav>
    )
}

export default NavBar;
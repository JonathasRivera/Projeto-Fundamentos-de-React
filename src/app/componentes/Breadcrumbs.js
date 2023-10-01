import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import 'tailwindcss/tailwind.css'

const Breadcrumbs = () => {
    const router = useRouter();

    const pathSegments = router.asPath ? router.asPath.split("/").filter((segment) => segment) : [];

    return (
        <div className="bg-gray-100 p-4">
            <ul className="flex">
                <li>
                    <Link className= 'text-#d46b29-500 hover:text-#d46b29-800' href='/'>
                        Home
                    </Link> &gt;
                </li>

                {pathSegments.map((segment, index) => (
                    <li key={index}>
                        <Link className="text-#d46b29-500 hover:text-#d46b29-800"
                            href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                            {segment}
                        </Link>
                            {index < pathSegments.length - 1 && ' > '}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Breadcrumbs;
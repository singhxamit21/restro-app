'use client'
import { useRouter,usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const { default: Link } = require("next/link")

const RestaurantHeader = () => {
    const [details, setDetails] = useState();

    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        let data = localStorage.getItem("restaurantUser")
        if (!data && pathName == "/restaurant/dashboard") {
            router.push("/restaurant")
        } else if(data && pathName == "/restaurant"){
            router.push("/restaurant/dashboard")
        } else {
            setDetails(JSON.parse(data))
        }
    },[])

    const logout = () => {
        localStorage.removeItem("restaurantUser")
        router.push("/restaurant")
    }
    return (
        <div className="header-wrapper">
            <div className="logo">
                <img style={{ width: 100 }} src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1709566300~exp=1709566900~hmac=70665722ef838160946b80548dec3357362b03939aa9655d890a4202c781ee0a" />
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>    
                    {
                        details && details.name ?
                        <>
                        <li><button onClick={logout}>Logout</button></li>
                        <li><Link href="/">Profile</Link></li>
                        </>
                        : <li><Link href="/">Login/SignUp</Link></li>
                    }
                <li>
                    <Link href="/">Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default RestaurantHeader;
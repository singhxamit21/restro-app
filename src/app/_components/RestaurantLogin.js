import { useState } from "react";
import "../restaurant/style.css"

const RestaurantLogin = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false)

    const handleClick = async () => {
        if(!email || !password){
            setError(true)
            return false;
        }else{
            setError(false)
        }
        console.log(email,password)
        let response = await fetch("http://localhost:3000/api/restaurant", {
            method: "POST",
            body: JSON.stringify({ email,password,login:true })
        })
        response = await response.json();
        console.log(response)
        if (response.success) {
            alert("Login Successfully")
            // const { result } = response
            // delete result.password;
            // localStorage.setItem("restaurantUser", JSON.stringify(result));
            // router.push("/restaurant/dashboard")
        }
    }
    return(
        <>
        <h3>Login Component</h3>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter email id" value={email} onChange={(e)=> setEmail(e.target.value)} className="input-field"/>
                {error && !email && <span className="input-error">Please enter valid email</span>}
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="enter password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input-field"/>
                {error && !password && <span className="input-error">Please enter valid password</span>}
            </div>
            <div className="input-wrapper">
                <button className="button" onClick={handleClick}>Login</button>
            </div>
        </div>
        </>
    )
}

export default RestaurantLogin;
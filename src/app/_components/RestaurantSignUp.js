import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [c_password,setc_password] = useState('');
    const [name,setName] = useState('');
    const [city,setCity] = useState('');
    const [address,setAddress] = useState('');
    const [contact,setContact] = useState('');

    const router = useRouter();

    const handleSignup = async () => {
        console.log(email,password,c_password,name,city,address,contact)
        let response = await fetch("http://localhost:3000/api/restaurant",{
            method:"POST",
            body:JSON.stringify({email,password,name,city,address,contact})
        })
        response = await response.json();
        console.log(response)
        if(response.success){
            const {result} = response
            delete result.password;
            localStorage.setItem("restaurantUser",JSON.stringify(result));
            router.push("/restaurant/dashboard")
        }

    }
    return(
        <>
         <h3>SignUp</h3>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter email id" className="input-field" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="enter password" className="input-field" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="enter confirm password" className="input-field" value={c_password} onChange={(event)=>setc_password(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter restaurant name" className="input-field" value={name} onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter city" className="input-field" value={city} onChange={(event)=>setCity(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter full address" className="input-field" value={address} onChange={(event)=>setAddress(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter contact no." className="input-field" value={contact} onChange={(event)=>setContact(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <button className="button" onClick={handleSignup}>Sign up</button>
            </div>
        </div>
        </>
    )
}

export default RestaurantSignUp;
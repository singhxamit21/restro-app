import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setc_password] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const router = useRouter();

    const handleSignup = async () => {
        console.log(email, password, c_password, name, city, address, contact)
        if (password !== c_password) {
            setPasswordError(true)
            return false;
        } else {
            setPasswordError(false)
        }

        if (!email || !password || !c_password || !name || !city || !address || !contact) {
            setError(true)
            return false;
        } else {
            setError(false)
        }

        let response = await fetch("http://localhost:3000/api/restaurant", {
            method: "POST",
            body: JSON.stringify({ email, password, name, city, address, contact })
        })
        response = await response.json();
        console.log(response)
        if (response.success) {
            const { result } = response
            delete result.password;
            localStorage.setItem("restaurantUser", JSON.stringify(result));
            router.push("/restaurant/dashboard")
        }

    }
    return (
        <>
            <h3>SignUp</h3>
            <div>
                <div className="input-wrapper">
                    <input type="text" placeholder="enter email id" className="input-field" value={email} onChange={(event) => {
                        setEmail(event.target.value)
                    }} />
                    {
                        error && !email && <span className="input-error">Please enter valid email</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="enter password" className="input-field" value={password} onChange={(event) => {
                        setPassword(event.target.value)
                    }} />
                    {
                        passwordError && <span className="input-error">Password and Confirm Password not Match</span>
                    }
                    {
                        error && !password && <span className="input-error">Please enter valid password</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="enter confirm password" className="input-field" value={c_password} onChange={(event) => {
                        setc_password(event.target.value)

                    }} />
                    {
                        passwordError && <span className="input-error">Password and Confirm Password not Match</span>
                    }
                    {
                        error && !c_password && <span className="input-error">Please enter valid conform password</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="enter restaurant name" className="input-field" value={name} onChange={(event) => {
                        setName(event.target.value)

                    }} />
                    {
                        error && !name && <span className="input-error">Please enter valid name</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="enter city" className="input-field" value={city} onChange={(event) => {
                        setCity(event.target.value)

                    }} />
                    {
                        error && !city && <span className="input-error">Please enter valid city</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="enter full address" className="input-field" value={address} onChange={(event) => {
                        setAddress(event.target.value)

                    }} />
                    {
                        error && !address && <span className="input-error">Please enter valid address</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="enter contact no." className="input-field" value={contact} onChange={(event) => {
                        setContact(event.target.value)

                    }} />
                    {
                        error && !contact && <span className="input-error">Please enter valid contact</span>
                    }
                </div>
                <div className="input-wrapper">
                    <button className="button" onClick={handleSignup}>Sign up</button>
                </div>
            </div>
        </>
    )
}

export default RestaurantSignUp;
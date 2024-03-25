import { useState } from "react"

const AddFoodItem = () => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [path,setPath] = useState("")
    const [description,setDescription] = useState("")
    const [error,setError] = useState(false)
    
    const handleAddFoodItem = async ()=>{
        console.log(name,price,path,description)
        if(!name || !price || !path || !description){
            setError(true)
            return false;
        }else{
            setError(false)
        }
        let resto_id
        let restaurantData = JSON.parse(localStorage.getItem("restaurantUser"))
        if(restaurantData){
            resto_id = restaurantData._id
        }
        let response = await fetch("http://localhost:3000/api/restaurant/foods", {
            method: "POST",
            body: JSON.stringify({ name,price,img_path:path,description,resto_id})
        })
        response = await response.json();
        if(response.success){
            alert("Food Item added")
        }else{
            alert("Food Item not added")
        }
    }
    return (
        <div className="container">
            <h1>Add new food Item</h1>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter food name" className="input-field" value={name} onChange={(e)=>setName(e.target.value)} />
                {error && !name && <span className="input-error">Please enter valid food name</span>}
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter price" className="input-field" value={price} onChange={(e)=>setPrice(e.target.value)} />
                {error && !price && <span className="input-error">Please enter valid price</span>}
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter image path" className="input-field" value={path} onChange={(e)=>setPath(e.target.value)} />
                {error && !path && <span className="input-error">Please enter valid path</span>}
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter description" className="input-field" value={description} onChange={(e)=>setDescription(e.target.value)} />
                {error && !description && <span className="input-error">Please enter valid description</span>}
            </div>
            <div className="input-wrapper">
              <button className="button" onClick={handleAddFoodItem}>Add Food Item</button>
            </div>
        </div>
    )
}

export default AddFoodItem
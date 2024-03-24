import { useState } from "react"

const AddFoodItem = () => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [path,setPath] = useState("")
    const [description,setDescription] = useState("")
    
    const handleAddFoodItem = ()=>{
        console.log(name,price,path,description)
    }
    return (
        <div className="container">
            <h1>Add new food Item</h1>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter food name" className="input-field" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter price" className="input-field" value={price} onChange={(e)=>setPrice(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter image path" className="input-field" value={path} onChange={(e)=>setPath(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter description" className="input-field" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <button className="button" onClick={handleAddFoodItem}>Add Food Item</button>
            </div>
        </div>
    )
}

export default AddFoodItem
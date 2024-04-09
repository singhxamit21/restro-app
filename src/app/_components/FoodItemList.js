import { useEffect, useState } from "react"

const FoodItemList = () => {
    const [foodItems, setFoodItems] = useState();
    useEffect(() => {
        loadFoodItems();
    }, [])

    const loadFoodItems = async () => {
        const restaurantData = JSON.parse(localStorage.getItem('restaurantUser'))
        let resto_id = restaurantData._id
        let response = await fetch("http://localhost:3000/api/restaurant/foods/"+resto_id)
        response = await response.json();
        if (response.success) {
            setFoodItems(response.result)
        } else {
            alert("food item list not loading")
        }
    }

    const deleteFoodItem = async (id) =>{
        let response = await fetch("http://localhost:3000/api/restaurant/foods/"+id,{
            method:'delete'
        })
        response = await response.json();
        if (response.success) {
            loadFoodItems()
        } else {
            alert("food item not deleted")
        }
    }
    return (
        <div>
            <h1>Food Items</h1>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {foodItems && foodItems.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img src={item.img_path}/></td>
                                <td><button onClick={()=>deleteFoodItem(item._id)}>Delete</button><button>edit</button></td>
                            </tr>)
                    })
                    }

                </tbody>
            </table>
        </div>

    )
}

export default FoodItemList
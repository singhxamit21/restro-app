const RestaurantSignUp = () => {
    return(
        <>
         <h3>SignUp</h3>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter email id" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="enter password" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="enter confirm password" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter restaurant name" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter city" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter full address" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="enter contact no." className="input-field"/>
            </div>
            <div className="input-wrapper">
                <button className="button">Sign up</button>
            </div>
        </div>
        </>
    )
}

export default RestaurantSignUp;
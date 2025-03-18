import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext';


const PlaceOrder = () => {

  const handleChange=(e)=>{
    const {name,value} = e.target
    setFormValues({...formValues,[name]:value})
    console.log(formValues);
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }



  const validate = (values) =>{
    const errors = {}
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!values.firstname){
      errors.firstname = "First is name required !"
    }
     if (!values.email) {
       errors.email = "email is required !";
     }else if(!regex.test(values.email)){
      errors.email = "This is not a valide email"
     }
      if (!values.city) {
        errors.city = "city is required !";
      }
       if (!values.phone) {
         errors.phone = "Phone is required !";
       }
         if (!values.zip) {
           errors.zip = "Zip code is required !";
         }
       return errors
  }


 const initialValues = {firstname:"",email:"",street:"",city:"",state:"",zip:"",country:"",phone:""}
 const [formValues,setFormValues] = useState(initialValues)
 const [formErrors,setFormErrors] = useState({})
 const [isSubmit,setIsSubmit] = useState(false)
  
 
 
 useEffect(() => {
     console.log(formErrors);

     if (Object.keys(formErrors).length === 0 && isSubmit) {
       console.log(formValues);
     }
   }, [formErrors]);



  const {getTotalCartmount}= useContext(StoreContext)
  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title" style={{ color: "black" }}>
          Delivery Information
        </p>

        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formValues.firstname}
          onChange={handleChange}
        />
        <p>{formErrors.firstname}</p>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formValues.email}
          onChange={handleChange}
        />
        <p>{formErrors.email}</p>
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formValues.street}
          onChange={handleChange}
        />
        <div className="multi-fields">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formValues.city}
            onChange={handleChange}
          />
          <p>{formErrors.city}</p>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formValues.state}
            onChange={handleChange}
          />
        </div>
        <div className="multi-fields">
          <input
            type="number"
            name="zip"
            placeholder="Zip code"
            value={formValues.zip}
            onChange={handleChange}
          />
          <p>{formErrors.zip}</p>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formValues.country}
            onChange={handleChange}
          />
        </div>
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={formValues.phone}
          onChange={handleChange}
        />
        <p>{formErrors.phone}</p>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivey Fees</p>
              <p>${getTotalCartmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartmount() === 0 ? 0 : getTotalCartmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder
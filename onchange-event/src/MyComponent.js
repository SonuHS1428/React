//onChange = event handler used primarily with form elements ex:<input>,<textarea>,<select>,<radio>
//           and it triggers a function every time the value of the input changes

import React,{useState} from 'react';

function MyComponent(){

    const [name,setName]=useState("Guest");
    const [quantity,setQuantity] = useState(1);
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [shipping,setShipping] = useState("Delivery");


    /*The event parameter in event handler functions, such as those used in React's onChange event,
     contains information about the event that was triggered.
     This parameter is automatically passed to the event handler function by the browser when the event occurs.
     Event Type: The event object contains information about the type of event that occurred
     Event Target: The event.target property refers to the element that triggered the event. */
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }



    return(
        <div>
            {/* <input> */}
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number'/>
            <p>Quantity: {quantity}</p>

             {/* <textarea> */}
            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'/>
            <p>Comments: {comment}</p>

            {/* <select> */}
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">select an option</option>
                <option>Visa</option>
                <option>Mastercard</option>
                <option>Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            {/* <radio> */}
            <label>
                <input type='radio' value="Pick up"
                       checked={shipping==="Pick up"}
                       onChange={handleShippingChange}/>
                Pick up
            </label><br/>
            <label>
            <input type='radio' value="Delivery"
                       checked={shipping==="Delivery"}
                       onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent
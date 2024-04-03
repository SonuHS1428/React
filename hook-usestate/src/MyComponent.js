import React,{useState} from 'react';

function MyComponent(){

    const [name,setName]=useState("Guest");
    const [isEmployeed,setisEmployeed]=useState(false);

    const updateName=()=>{
        setName("Alia"); //name="Alia";console.log(name);
        /*when u use setter func of a stateful var it will 
        trigger a render of the virtual DOM but normal var don't*/
    }

    const toggleEmployeeStatus=()=>{
        setisEmployeed(!isEmployeed);
    }

    return(
        <div>
        <p>Name:{name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Name:{isEmployeed ? 'YES':'NO'}</p>
        <button onClick={toggleEmployeeStatus}>Toggle</button>
        </div>
    );


}
export default MyComponent
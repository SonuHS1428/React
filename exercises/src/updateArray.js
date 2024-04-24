import React,{useState} from "react";

function MyComponent(){
    
    const[food,setFood]=useState(["Apple","Banana","Orange"]);

    function handleAdd(){
        const newFood=document.getElementById('inputID').value;
        document.getElementById('inputID').value="";
        setFood(f=>[...f,newFood]);
    } 

    return(
        <div>
            <h1 className="text-3xl pb-2 ml-2">List of Foods</h1>
            <ul>
                {food.map((food,index)=>
                <li key={index} className="ml-4">
                    {food}
                </li>)}
            </ul>
            <input type="text" id='inputID' placeholder="Enter new food" className="border border-black before:selection bg-gray-200 rounded mb-2"/>
            <button onClick={handleAdd} className="py-3 px-4 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-500t text-white bg-blue-700 ml-2">Add Food</button>

        </div>
    );
}

export default MyComponent;
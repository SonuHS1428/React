//useEffect()= React hook thet tells React to DO SOME CODE WHEN (pick one):
//             This component re-renders
//             This component mounts
//             The state of a value

//useEffect(function,[dependencies])

//1.useEffect(() => {})     //Runs after every re-render
//2.useEffect(() =>{},[])   //Runs only on mount
//3.useEffect(() => {},[value])     //Runs on mount + when value changes

//USES
//1. Event listeners
//2. DOM manipulation
//3. Subscription (real-time updates)
//4. Fetching data from an api
//5. Clean up when a component unmounts

import React,{useState,useEffect} from "react";

function UseEffect(){
    const [count,setCount]=useState(0);
    const [color,setColor]=useState("green");

    useEffect(()=>{
    document.title = `Count:${count} ${color}`; //executing this func when one of the count&color(dependencies) changes
    },[count,color]);

    //even though we remove useEffect it will work as same..but there are couple of advantages with useEffect
    //1.it keeps your code more organised,if u didn't use useEffect the above document... code will run every single time regardless every time the component renders
    //2.with more advanced features such as event listeners or subscriptions or to remove or free up the resources i.e u can return a cleanup code
    
    function addCount(){
        setCount(c=>c+1);
    }
    function subtractCount(){
        setCount(c=>c-1);
    }
    function changeColor(){
        setColor(c=>c==="green" ? "red" : "green");
    }

    return(
        <div>
            <p style={{color:color}} className="ml-16 text-xl"> Count: {count}</p>
            <button onClick={addCount} className="border border-black before:selection bg-blue-200 rounded mb-2 text  text-gray-800 pb p-1 mt-4 ">Add</button>
            <button onClick={changeColor} className="border border-black before:selection bg-blue-200 rounded mb-2 text text-gray-800 ml-2 p-1">Change Color</button>
            <button onClick={subtractCount} className="border border-black before:selection bg-blue-200 rounded mb-2 text  text-gray-800 ml-2 p-1">Subtract</button>
            
        </div>
    );
}

export default UseEffect;

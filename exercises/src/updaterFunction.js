//updater function = A function passed as an argument to setState() usually 
//                   ex..setYear(y=>(y+1))
//                   using updater functions allow for safe updates based on the previous(not current) state used 
//                   with multiple state updates and asynchronous functions ,it is good practice to use updater func


//updating state of an object in react

import React,{useState} from "react";
function UpdaterFunction(){
    const [car,setCar]=useState({year:2024,make:"ford",model:"Mustang"});

    function handleYearChange(event){
        //when we update the state of car we are going to creating a new obj,spread all of the 
        //current properties of our car and add a year.. and also we are using here a updater function
        setCar(c=>({...c,year:event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c=>({...c,make:event.target.value}));
    }
    function handleModelChange(event){
        setCar(c=>({...c,model:event.target.value}));
    }

    return(
        <div>
            <p className="mb-3 text-xl">Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange} className="border before:selection bg-gray-200 rounded mb-2"></input> <br/>
            <input type="text" value={car.make} onChange={handleMakeChange} className="border before:selection bg-gray-200 rounded mb-2"></input> <br/>
            <input type="text" value={car.model} onChange={handleModelChange} className="border before:selection bg-gray-200 rounded mb-2"></input>
        </div>
    );
}

export default UpdaterFunction;
import React,{useState} from "react";

function UpdateArrObj(){
    
    const [cars,setCars]=useState([]);
    const [carYear,setcarYear]=useState(new Date().getFullYear());
    const [carMake,setcarMake]=useState("");
    const [carModel,setcarModel]=useState("");

    function handleAddCars(){
        const newCar={year:carYear,
                      make:carMake,
                      model:carModel};
        setCars(c=>[...c,newCar]);
        
        setcarYear(new Date().getFullYear());
        setcarMake("");
        setcarModel("");
    }
    function handleRemoveCars(index){
        setCars(c=>c.filter((_,i)=>i!==index));

    }
    function handleAddCarYear(event){
        setcarYear(event.target.value);

    }
    function handleAddCarMake(event){
        setcarMake(event.target.value);
    }
    function handleAddCarModel(event){
        setcarModel(event.target.value);
    }

    return(<div>
        <h1 className="text-xl font-bold text-gray-800 mb-4 ">List of Cars</h1>
        <ul className="list-disc pl-5 mt-4 grid gap-2">
            {cars.map((cars,index)=>
            <li key={index} onClick={()=>handleRemoveCars(index)} className="text-gray-700 text-lg py-2 rounded-md">
                {cars.year} {cars.make} {cars.model}
            </li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleAddCarYear} placeholder="Enter car year" className="border border-black before:selection bg-gray-200 rounded mb-2"/> <br/>
        <input type="text" value={carMake} onChange={handleAddCarMake} placeholder="Enter car make" className="border border-black before:selection bg-gray-200 rounded mb-2"/> <br/>
        <input type="text" value={carModel} onChange={handleAddCarModel} placeholder="Enter car model" className="border border-black before:selection bg-gray-200 rounded mb-2"/> <br/>
        <button onClick={handleAddCars} className="border border-black before:selection bg-blue-200 rounded mb-2 text-l font-bold text-gray-800">Add Car</button>

    </div>);
}

export default UpdateArrObj;
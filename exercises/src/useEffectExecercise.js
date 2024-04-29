import React,{useEffect,useState} from "react";

function ResizeWindow(){
    
    const [height,setHeight]=useState(window.innerHeight);
    const [width,setWidth]=useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED");//every time the component rerenders we are adding a new event listener,without using useEffect hook these 2 lines,many(1000) eventlisteners are added
        // but by using useEffect,it only add an event listener only when the component mounts so we need to add an empty array ofdependencies.

        return () =>{
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTENER REMOVED");
        }//(clean up)this code for before the next render or when the component unmounts,if we add an event listener then we unmount
        //the component it would be good practice to remove that same event listener,if u don't that can leads to unexpected behaviour
    }, []);   
    
    //u can have more than useEffect in our component
    useEffect(()=>{
        document.title = `Size: ${height} * ${width} `;
    },[width,height]);
    
   
    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return(
        <div>
            <p>WINDOW HEIGHT: {height}px</p>
            <p>WINDOW WIDTH: {width}px</p>
        </div>
    );
}
export default ResizeWindow;


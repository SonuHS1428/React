//useState() = Re-renders the component when the state value changes

//useRef() = "use reference" Does not cause re-renders when its value changes
//           1.Accessing/Interacting with DOM elements
//           2.Handling Focus,Animations,and Transitions
//           3.Managing timers and intervals


import React,{useEffect,useRef} from "react";

function UseRef(){
    
    const inputRef = useRef(null);//useRef returns a object with property current 

    useEffect(()=>{
        console.log("COMPONENT RENDERED");
    });
    
    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="yellow"; //inputRef.current will give us HTML element and when we click
        //the btn input area get focus and also changed to yellow with getting re renders but in case of using useState component get re rendered for each time btn clicks
    }

    return(
        <div>
            <button onClick={handleClick}>
                Click me!
            </button><br/>
            <input ref={inputRef}/> {/* ref attribute is used to create a references to elements */}
        </div>
    );

}
export default UseRef;
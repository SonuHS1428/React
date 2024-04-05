function Button(){
    //click events are automatically provided with an event argument,
    //it is an object that describes the event that occured

    //const handleClick = (event) => console.log(event);
    //in console we get...
    //SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}*/}
    
    const handleClick = (event) => event.target.textContent="OUCH!";//changing text of a btn when we click it

    return(
        <>
        <button onClick={(event)=>handleClick(event)}>Click me</button>
        {/*<button onDoubleClick={(event)=>handleClick(event)}>Click me</button>*/}
        </>
    );
}
export default Button
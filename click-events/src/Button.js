function Button(){
    
    //const handleClick=()=>console.log("yeah u clicked me!!");normal function
    const handleClick2 = (name) => console.log(`${name} stop clicking me`);//arguments to function
    
    return(
        <>
        <button onClick={()=>handleClick2("sonu")}>Click me</button> {/*here we wrap handleClick() within arrow func to prevent from calling the handleClick() right away  */}
        </>
    );
}
export default Button
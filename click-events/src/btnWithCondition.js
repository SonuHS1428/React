function Button(){
    
    let count=0;
    const handleClick=(name)=>{
        if(count<3){
            count+=1;
            console.log(`${name} you clicked me ${count} time`)
        }
        else{
            console.log(`${name} stop clicking me`)
        }

    }
    
    return(
        <>
        <button onClick={()=>handleClick("sonu")}>CLICK</button>
        </>
    );
}
export default Button
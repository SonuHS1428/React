import React,{useState,useEffect} from "react";

function DigitalClock(){

    const [time,setTime] = useState(new Date());

    //useEffect(function,[dependencies]);
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000);

        return () =>{
            clearInterval(intervalId);
        }// a cleanup function to avoid unexpected behaviour
    },[]);

    function formatTime(){
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const sec=time.getSeconds();
        let meridien= hours < 12 ? "AM" : "PM";

        hours = hours % 12  || 12;// if u not want to display time in military time
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(sec)} ${meridien}`
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number; //to make 12:3:2 to 12:03:02
    }


    return(
        <div className="h-screen flex items-center justify-center bg-black">
            <div>
                <h1 className="text-center text-[85px] font-['mono'] text-yellow-600">{formatTime()}</h1>
            </div>
            
        </div>
    );
}

export default DigitalClock;
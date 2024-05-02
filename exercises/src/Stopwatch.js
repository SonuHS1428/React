import React,{useState,useEffect,useRef} from "react";

function StopWatch(){

    const [isRunning,setIsRunning] = useState(false);
    const [elapsedTime,setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=> {
        if(isRunning){
            intervalIdRef.current = setInterval(() =>{
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }//cleanup function

    },[isRunning]);

    function start(){
        setIsRunning(true); //we are setting state of isRunning to be true
        startTimeRef.current = Date.now() - elapsedTime;  //updating a reference does not cause our component to re render
        //Date.now() will return current date and time in miliseconds, by keeping a reference to when we started the stopwatch we can see how many millisecondshas elapsed since then
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) /10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");

        return `${minutes}:${seconds}:${milliseconds}`;
        
    }
    
    return(
        <div className="p-4 bg-gray-200 rounded-md">
            <div className="flex justify-center text-3xl font-bold mb-8 ">{formatTime()}</div>
            <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={start}>Start</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={stop}>Stop</button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={reset}>Reset</button>
            </div>
        </div>

    );
}

export default StopWatch;
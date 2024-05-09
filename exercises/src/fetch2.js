import {useState,useEffect} from 'react';

function Mycomp(){
    const [advice,setAdvice] = useState("");
    const [count,setCount] = useState(0);

    async function getAdvice(){
        try{
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c+1);
        } catch(error){
            console.error('Error fetching data:',error);
        }
    }

    useEffect(function (){
        getAdvice();
    },[]);

    return( <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-3xl font-bold mb-8">{advice}</h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getAdvice}>Get Quotes</button>
    <p className="mt-4">You have read <span className="font-bold">{count}</span> pieces of advice</p>
  </div>
);
}

export default Mycomp;
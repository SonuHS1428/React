import ComponentB from "./ComponentB";
import React,{useState,createContext} from 'react';
import ComponentD from "./ComponentD";

export const UserContext = createContext();

function ComponentA(){
    const [user,setUser] = useState("Sonu")

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB/> 
            </UserContext.Provider>
            {/* if u want to display the user name as above in componentD then u have to use props in every other componentsB,C,D...<ComponentB user={user}....and then in componentB we have to set up props/>*/}
        </div>
    );
}
export default ComponentA;
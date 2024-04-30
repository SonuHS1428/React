import ComponentD from "./ComponentD";
import React,{useContext} from 'react';
import { UserContext} from './ComponentA';


function ComponentC(){  {/*function ComponentB(props){ */}
    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2> {`Hello again ${user}`} </h2>
            <ComponentD/>   {/*<ComponentC user={props.user}/>....and then in componentD */}
        </div>
    );
}
export default ComponentC;
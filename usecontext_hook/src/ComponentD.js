import React,{useContext} from 'react';
import { UserContext} from './ComponentA';

function ComponentD(){ {/*function ComponentB(props){ */}

    const user=useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2> {`Bye ${user}`} </h2>  {/* we are avoiding prop drilling instead of drilling down to the center component topass down a valueby using useContext we traverse up a component tree to find nearest provider */}
            {/*<h2> {`Bye ${props.user}`} </h2> .....All this process is known as prop drilling i.e by passing props down each of these nested components and the solution for this is useContext hook*/}
        </div>
    );
}
export default ComponentD;
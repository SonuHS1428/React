import ComponentC from "./ComponentC";

function ComponentB(){  {/*function ComponentB(props){ */}
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC/> {/*<ComponentC user={props.user}/>....and then same will happen in componentC */}
        </div>
    );
}
export default ComponentB;
//Uncontrolled Components in React
//   Uncontrolled components in React refer to form elements whose state is not managed by React. 
//   Instead, their state is handled by the browser's DOM.


import { useRef } from "react";

function Uncontrolled() {
  const selectRef = useRef(null);
  const checkboxRef = useRef(null);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input value:", inputRef.current.value);
    console.log("Select value:", selectRef.current.value);
    console.log("Checkbox value:", checkboxRef.current.checked);
  }

  return (
    <>
    <h1 className="text-3xl mt-5 mb-5">Uncontrolled Components in React</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name:</p>
        <input ref={inputRef} type="text" className="border border-black before:selection bg-gray-200 " />
      </label>
      <label>
        <p>Favorite color:</p>
        <select ref={selectRef} className="border border-black before:selection bg-gray-200 ">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </label><br/><br/>
      <label>
        Do you like React?
        <input type="checkbox" ref={checkboxRef} className="border border-black before:selection bg-gray-200 "/>
      </label><br/><br/>
      <button type="submit" className="py-3 px-4 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-500t text-black bg-gray-200 ">Submit</button>
    </form>
    </>
  );
}

export default Uncontrolled;


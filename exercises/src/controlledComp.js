//FORMS = They enable users to share information, complete tasks and provide feedback.

//In React, there are two ways of handling form data:
//  1.Controlled Components: In this approach, form data is handled by React through the use of hooks
//  such as the useState hook.
//  2.Uncontrolled Components: Form data is handled by the Document Object Model (DOM) rather than by React.
//  The DOM maintains the state of form data and updates it based on user input.

//Controlled Components in React
//        To create a controlled component, you need to use the value prop to set the value of form
//        elements and the onChange event to handle changes made to the value.

import {useState} from 'react';
 
function  ControlledComponent()  {
	const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

return  (
<form>
    <h1 className="text-3xl mb-5">Controlled Components in React</h1>
	<label>Input Value:  
	<input  type="text"  value={inputValue} onChange={handleChange} className="border border-black before:selection bg-gray-200 ml-2"/>
	</label>
	<p>Input Value: {inputValue}</p>
</form>
)};

export default ControlledComponent;
# React

React is a Javascript library that enables you to create the appearance of websites/for building user interface.

## Creating react application using create-react-app package

create-react-app is a command line interface tool that allows you to quickly create and run react application with no configuration which means you simply run the command and entire react project is creacted for you.

## Method 1 : npx

npx create-react-app <project_name>

(npx is a npm package runner which get installed when you install node) 

## Method 2 : npm

In this approach we install create-react-app package globally and then we use the package to generate the projects

npm install create-reac-app -g                     then

create-react-app<project name>

(among these two methods first one is preferred because there we don't have to install package globally and don't have to worry about constantly updating create-react-app package)

To execute the application 

npm start

## Components

Components describes a part of user interface and they are the building blocks of react application.

### There are two types of components

- functional components and
- class components

One component contain every other component the containing component is the root component and is usually named as App component

Component code is usually placed in a js or jsx file ,for example App component is placed in App.js

### Functional components

Functional components are literally JavaScript functions that accepts an input of properties and returned HTML that describes the UI where html is actually something known as JSX.

```
//Greet.js

import React from "react";

function Greet(){
    return <h1>Hello Everyone</h1>
}

export default Greet
```

- When we just create the functional component, the HTML Hello Everyone is not going to be rendered in the browser, the Greet component is no way connected with the rest of our application. So we have to export the Greet function from the Greet.js and import in App.js and included in App component.

```jsx
//App.js

import logo from './logo.svg';
import './App.css';
import Mycomponent from './components/Greet'

function App() {
  return (
    <div className="App">
      <Mycomponent/>
    </div>
  );
}

export default App;
```

While exporting we have default exports and named Exports.

- default exports can be imported with any name,
- while named exports must be imported using the exact name they were exported with, enclosed in curly braces {}.

```jsx
//App.js
import {Greet} from './components/Greet’

//Greet.js
export function Greet(){
    return <h1>Hello Everyone</h1>
}
```

### Class components

Class components are basically es6 classes, similar to function component a class component also can optionally receive props as input and return HTML 

Apart from the props ,a class component can also maintain some information which is private to that component and use that information to describe the UI

```jsx
//Welcome.js

import React,{ Component } from 'react'

class Welcome extends Component{
    render(){
        return <h1>Class Component</h1>
    }
}

export default Welcome
```

- Whenever we create a class component we need to import  2 things one is React and Component class from react.
- Then we are define a class, for this class to become a react component there are two steps
1. it should extend the component class from react 
2. the class has to be implement a render method which will return null or some HTML

### Functional Components

### Class Components

Simple functions                                                            More feature rich

Use Functional components as much as possible         Maintain their private data-state

Absence of ‘this’ keyword                                              Complex UI logic

Solution without using state                                          Provide lifecycle hooks

Mainly responsible for the UI                                         smart/container/statefull

Stateless/dumb/presentational

## JSX (Javascript XML)

-Extension to javascript language syntax and it makes easier to build User interfaces.

-JSX is everything which is wrapped inside the parentheses returned by the component.

### Using JSX to compose UI

- React component can also be created in the same file of another component, if you plan to only
use it in that component.
- Here we create a WelcomeMessage component in the same App.js  file.
- Now inside the App  component JSX we can add <WelcomeMessage />  to show this component in the user interface, hence we can see the "Welcome!" message in the screen.

```jsx
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';

function WelcomeMessage() { 
  return <p>Welcome!</p> 
} 

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
    </div>
  );
}

export default App;
```

- Here WelcomeMessage  is a child component of App, and App  is its parent componnet
- Like this we can compose an application interface and use it like we're writing HTML

### Differences b/w html and jsx

- In HTML we use the class  attribute but class in the JavaScript programming language is a reserved word. That's why we ended up with className  instead of class.
- camelCase property naming convention

          onclick→onClick

          tabindex→tabIndex

### Embedding JavaScript in JSX

-One of the best features of React is that we can easily embed JavaScript into JSX

-React is not adding new things. Instead, it lets us use JavaScript in the JSX, by using curly brackets.

-example, in App.js 

We import logo SVG file using

```jsx
import logo from './logo.svg’
```

and then in the JSX we assign this SVG file to src  attribute of img  tag

```jsx
<img src={logo} className=”App-logo” alt=”logo”/>
```

-another example, Suppose the component has a variable called message 

```jsx
function App() {
const message = 'Hello!'
//...
}
```

We can print this value in the JSX by adding {message}  anywhere in the JSX.

Inside the curly brackets { } we can add any JavaScript statement, and the statement must return something.

```jsx
function App() {
  const message = 'Hello!' ;
  return (
    <div className="App">
      <WelcomeMessage />
      <Greet/>
      <Welcome/>
      {message}
      {message === 'Hello!' ? 'The message was "Hello!"' : message}
    </div>
  );
}
```

We have a ternary operator where we define a condition (message === 'Hello!' ), and we print one value if the condition is true, or another value (the content of message  in this case) if the condition is false.

## Props

-read only properties that are shared between components, A parent component can send data to a child component.<Component key=value/>

-Props can be passed as attributes to the component in the JSX:

-and inside the component we receive the props as argument:

-It's common to use object destructuring to get the props by name

```jsx
import Student from "./Student";
function App() {
  return (
    <>
     <Student name="Bob" age={24} isStudent={true}/>
     <Student name="Dora" age={21} isStudent={true}/>
     <Student name="Peter" age={28} isStudent={false}/>
    </>
  );
}

export default App;
```

```jsx
function Student(props){
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

export default Student
```

### propTypes

a mechanism that ensures that the passed value is of the correct datatype,

age:ProtoTypes.number

```jsx
//Student.js
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

//App.js
<Student name="Bob" age="30" isStudent={true}/>
```

Warning: Failed prop type: Invalid prop `age` of type `string` supplied to `Student`, expect `number`.
at Student.

-it is good for debugging, it won’t stop the application from running just issue a warning and it is good practice to include proptyes if you are accepting props.

### defaultProps

default values for props in case they are not passed from the parent component

name: ”Guest”

```jsx
Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false,
}

//App.js
<Student/>
```

### childrenProps

```jsx
//App.js
<Student name="Bob" age={24} isStudent={true}>Student no.1(children props)</Student>

//Student.js
{props.children}
```

A special prop is called children . That contains the value of anything that is passed between the opening and closing tags of the component.

## Conditional rendering

It allows you to control what gets rendered in your applications, by utilizing conditional rendering we can (show, hide or change components).

**There are several ways we can implement conditional rendering in React.**

```jsx
//App.js
import UserGreeting from './UserGreeting';

function App() {
  return (
    <div>
      <UserGreeting isloggedIn={false} username="Meera"/>
    </div>
  );
}

export default App;
```

**`if...else` in React**

```jsx
function UserGreeting(props){
    if(props.isloggedIn){
       return <h2>Welcome {props.username}</h2>
    }
    else{
       return <h2>Please log in to continue</h2>
    }
}

export default UserGreeting
```

**The ternary operator in React**

```jsx
return(
        props.isloggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please log in to continue</h2>
);
    
                                  OR
                                  
 const welcomeMessage = <h2>Welcome {props.username}</h2>
 const loginPrompt= <h2>Please log in to continue</h2>
    
 return(
     props.isloggedIn ? welcomeMessage : loginPrompt
 );
```

## Props vs State

Both props and state hold information that influences the UI in the browser

### props

- props get passed to the components
- Function parameters
- props are immutable
- In functional components, props can be accessed using the props parameter

### state

- state is managed within the component
- Variables declared in the function body
- state can be changed
- state can be accessed using the useState hook in functional component

-**Props are used to pass data from a parent component to a child component, while state is used to manage data within a component**

## React hook

Special function that allows functional components to use React features without writing class components some of react hooks are useState, useEffect, useContext, useReducer, useCallback….

### useState( )

A react hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM. [name, setName]

```jsx
import MyComponent from './MyComponent'

function App() {
  return (
    <MyComponent/>
  );
}

export default App;
```

```jsx
import React,{useState} from 'react';

function MyComponent(){

    const [name,setName]=useState("Guest");
    const [isEmployeed,setisEmployeed]=useState(false);

    const updateName=()=>{
        setName("Alia"); //name="Alia";console.log(name);
        /*when u use setter func of a stateful var it will 
        trigger a render of the virtual DOM but normal var don't*/
    }

    const toggleEmployeeStatus=()=>{
        setisEmployeed(!isEmployeed);
    }

    return(
        <div>
        <p>Name:{name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Name:{isEmployeed ? 'YES':'NO'}</p>
        <button onClick={toggleEmployeeStatus}>Toggle</button>
        </div>
    );

}
export default MyComponent
```

## Props vs State

Both props and state hold information that influences the UI in the browser

### props

- props get passed to the components
- Function parameters
- props are immutable
- In functional components, props can be accessed using the props parameter

### state

- state is managed within the component
- Variables declared in the function body
- state can be changed
- state can be accessed using the useState hook in functional component

### state

state is an object that is privately maintained inside a component and it can influence what is rendered in the browser and it also can be changed within the component.
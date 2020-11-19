// Import the React & React Dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component 
const App= () => {
    const buttontext = {text: 'Click Me'};

    return ( 
    <div>
        <label className ="label" htmlFor="name"> Enter Name: </label>
        <input id="name" type="text"/>
        <button style= {{ backgroundColor: 'blue', color: 'white' }}> {buttontext.text} </button>
    </div>
    );
};

// Take the React Component & show it on the screen 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAYwRhwwjzOX18AcBQd8ea2jp-Tw8wryqQ';

// Create a new component. This component should produce some HTML
const App = function() {
    return <div>Hello!</div>;
}

//Note a function can also be created by using arrows via ES6 syntax
//The only real difference between function and => is the difference 
//between what each interprets the keyword 'this' as
/*
const App = () => {
    return <div>Hi!</div>;
}
*/


//Take this component's HTML and put it on the page (in the DOM)
//ReactDOM.render(<App />); actually creates an instance of the App class
//just passing App will result in an error because we cannot pass the element
//it self, we have to pass an instance of the element.
//document.querySelector('.container') tells React to render <App/> into the container
//which is in index.html
ReactDOM.render(<App />, document.querySelector('.container'));
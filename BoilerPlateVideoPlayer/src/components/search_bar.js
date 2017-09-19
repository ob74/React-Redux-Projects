import React from 'react';
//All files with jsx need an import react statement even if they dont use the render function

//This is just a simple functional component and can't perform intellectual tasks like forwarding input
// const SearchBar = () => {
//     return <input />;
// };

//A class based component has props by default, whereas a functional component will have to take in props as a parameter

//STATE
//State is a plain javascript object which is used to record and react (pun intended) to user events
//Each class based component has its own state object
//Whenever a state changes, that component is re-rendered
//If that component has children, then its children re-render as well.
//A component's initial state must be initialized in the constructor
//In React state is on the component level, whereas in redux state is on the application level

//This version of SearchBar is an actual class and can handle increased functionality
//This SearchBar extends ReactComponent hence it has increased functionalities inherited from React
//To add syntactic sugar and follow es6, we could import { Component } form 'react' and then simply
//extend Component instead of React.Component
class SearchBar extends React.Component {
    
    constructor(props) {
        //All constructors must call super()
        super(props);

        this.state = {  term: ''  };
    }

    //All React Components require a render function
    //The render function returns a single element written in jsx.
    //The element can have nested elements within it, but the return statement shall only return one element
    //Adding events to a jsx components requires a simple react property (similar to html property. Remember JSX gets converted to HTML) 
    //which can be assigned a method to the event handler.
    //In JSX a javascript variable should be wrapped around curly braces. THIS ALSO APPLIES TO JAVASCRIPT COMMENTS... VERY CONSISTENT
    render() {
        {/*
            return <input onChange={this.onInputChange} />;
            Simple components with simple event handlers can all be done on one line with es6 arrow functions
        */} 

        {/*
            DONT EVER DO this.state.term = event.target.value
            This is because React handles a lot of other thing on state changes, we cannot simply change just the term
            Always manipulate state by using this.setState( <variable needed to be updated>: <desired update>)
            This works out because react only updates that single variable of the component, other variables stay untouched

            The bottom render has an input component which is considered controlled because the value of the component is
            controlled by its state. 

            More on controlled vs uncontrolled components:
            https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/

        */}

        return (
            <div className="search-bar">
                <input 
                    onChange={event =>  this.onInputChange(event.target.value)} 
                    value={this.state.term} 
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

//this exports the SearchBar function when SearchBar is imported from search_bar.js
export default SearchBar;
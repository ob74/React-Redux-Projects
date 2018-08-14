# NOTES
Thoughts and important notes while learning React


## React

* Creates html using components and views
  
* Virtual DOM
    * React's own DOM that abstracts out traditional HTML DOM
    * Allows React to render and (pun alert) react with specific parts of the document
  
* React is completely independent of the rest of the application
    * React can be rendered server side using node via react and react-dom modules or as a script using a cdn
  
*  JSX

    * Javascript Syntax Extension
    * Looks like XML/HTML but uses Javascript in the back to create React Element Classes
        * These Elements then need to be instantiated before being rendered into a targeted HTML element (example: a div container)
  
* **Always Stick to one component per file**


* Components that are used inside other components need to be exported before they can be imported

* Components can be written as a Javascript ES6 function which extends React.Component 
    * This adds added functionality and complexity to a component
    * All classes that extend React.Component MUST implement the render() function

* Events
    * In React an event handler is written as a method for a specific component and then a reference (in curly braces { this.functionName } ) to that method is assigned to the event in that component's render function

* State
    * A javascript object used to record and react to user events
    * Each class based component (functional components DONT have a state) has its own state object
    * Whenever a state is changed, the component re-renders along with any of its child components
    * State needs to be initialized in a constructor that takes in props as a parameter
        * The super() function is used to call React.Components constructor using props as an arg
        * this.state is then assigned to an object which can hold any class attributes <br> this.state = { attribute1: ' ', attribute2: 2 }
    * The state and its attributes are changed outside of the constructor through the setState() method <br> setState({attribute1: 'new value'})
        * State can be referenced inside the render function with 'this' key word
        * In order to use a state inside a callback or event handler function, we need to bind 'this' when we refer to the event handler <br>
        { this.functionName.bind(this) }

* Controlled Components
    * In React we dont control data flow in a traditional way where we retrieve data by targeting elements once the user is done typing
    * Controlled components update the value when the state changes and re-renders a components
    * This allows us to easily set default values, instantly validate fields, conditionally disable submit buttons, enforcing better and quicker input format and control dynamic inputs
    * Since, react only re-renders specific components and its child components, this is more efficient than handling input values via a traditional jquery way
    * This also sets up a foundation for React's one way data flow
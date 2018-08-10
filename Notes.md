# NOTES
Thoughts and important notes while learning React


## React

* Creates html using components and views
* Virtual DOM
    * React's own DOM that abstracts out traditional HTML DOM
    * Allows React to render and (pun alert) react with specific parts of the document
* React is completely independent of the rest of the application
    * React can be rendered server side using node via react and react-dom modules or as a script using a cdn
  
    ### JSX

    * Javascript Syntax Extension
    * Looks like XML/HTML but uses Javascript in the back to create React Element Classes
        * These Elements then need to be instantiated before being rendered into a targeted HTML element (example: a div container)
  
* **Always Stick to one component per file**


* Components that are used inside other components need to be exported before they can be imported

* Components can be written as a Javascript ES6 function which extends React.Component 
    * This adds added functionality and complexity to a component
    * All classes that extend React.Component MUST implement the render() function
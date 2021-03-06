import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

// YouTube API Key
const API_KEY = "AIzaSyAYwRhwwjzOX18AcBQd8ea2jp-Tw8wryqQ";

// Created React Component
// Note: App is just a class, this class needs to be instantiated before creating the React element
const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    ); 
}
 
//Render Component into the ReactDOM
ReactDOM.render(<App></App>, document.querySelector('.container'));

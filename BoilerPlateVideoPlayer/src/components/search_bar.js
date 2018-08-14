import React from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    
    render() {
        return (
            <div>
                <input 
                    value = { this.state.term }
                    onChange = { this.onInputChange.bind(this) } 
                />
            </div>
        );
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        console.log(this.state.term);
    }

}


// const SearchBar = () => {
//     return <input />;
// } 

export default SearchBar;
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAYwRhwwjzOX18AcBQd8ea2jp-Tw8wryqQ';

//React Downward Data Flow
//Only the most parent component in the application should receive information and fetch data
//from an API call etc. The data should then be passed or retrieved by the children who need the
//information/data

//Arrow functions
//Arrow functions don't have their own this or arguments binding. Instead, those identifiers are resolved 
//in the lexical scope like any other variable. That means that inside an arrow function, this and arguments 
//refer to the values of this and arguments in the environment the arrow function is defined in 
//(i.e. "outside" the arrow function):
//More on Arrow functions:
//https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch

// Create a new component. This component should produce some HTML
class App extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null 
        };  
        
        this.videoSearch('surfboards');

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            {/* ES6 adds more syntactic sugar where variable and parameter name is the same
                we can simply send back just one.
                EXAMPLE:
                    this.setState({ videos });
                        instead of
                    this.setState({ videos: videos });
                NOTE: This will only be allowed for instances when variable and parameter are the same
            */}
            this.setState({ 
                videos: videos,
                selectedVideo : videos[0]
            });
        }); 
    }

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                />
            </div>
        );
    }
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
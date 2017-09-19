import React from 'react';

const VideoListItem = ({video}) => {

    //const VideoListItem = (props) => {
    //const video = props.video; 
    //this can be done an easier way through es6 syntax

    //instead of taking in (props) as the argument, we can take in 
    //{video} which explicitly takes the video variable/element from the props object and
    //stores it in a variable called video

    //console.log(video);

    const imageUrl = video.snippet.thumbnails.default.url;


    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;
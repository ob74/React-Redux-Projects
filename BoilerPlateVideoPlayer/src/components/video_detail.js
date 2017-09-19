import React from 'react';

const VideoDetail = ({video}) => {

    if(!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    //const url = 'https://www.youtube.com/embed/' + videoId;
    //using es6 syntax (string interpolation aka template strings) we can rewrite const url
    //NOTE the syntax uses backticks (they are normally placed next to the '1' key)
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe> 
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
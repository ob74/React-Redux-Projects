import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
    const VideoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        //the ul class name is part of the bootstrap css
        <ul className="col-md list-group">
            {VideoItems}
        </ul>
    );
};

export default VideoList;
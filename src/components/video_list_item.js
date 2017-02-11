import React from 'react';

const VideoListItem = ({video}) => {
  // The line below is identical to the ({video}) => piece of ES6, it
  // just means 'these objects have a value called 'video', please pull
  // it out and save it as a const called video'
  //const video = props.video;

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

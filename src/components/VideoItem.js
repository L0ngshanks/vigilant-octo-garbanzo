import '../css/videoItem.css'

import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className='item video-item'>
            <div className='ui small image'>
                <img src={video.snippet.thumbnails.default.url} alt={ video.snippet.description } />
            </div>
            <div className='middle aligned content'>
                <span className='header'>{video.snippet.title}</span>
            </div>
        </div>
    )
}

export default VideoItem
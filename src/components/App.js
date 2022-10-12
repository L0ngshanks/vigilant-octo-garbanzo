import React, { useState, useEffect } from 'react'

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import UseVideos from '../hooks/UseVideos'

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, Search] = UseVideos('buildings')
    
    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className='ui container'>
            <SearchBar onFormSubmit={Search} />
            Video's found: {videos.length}
            <div className="ui grid">
                <div className='ui row'>
                    <div className='nine wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='seven wide column'>
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
import React, { useState, useRef } from 'react';
import BtnNavQuizz from '../components/BtnNavQuizz';
import BtnWatchVidAgain from '../components/BtnWatchVidAgain';
import Videoplayer from '../components/Videoplayer';


const VideoplayerComp = () => {
    const playerRef = useRef(null);
    const [videoWatched, setvideoWatched] = useState(false);
    const handleVideoWatched = (videoWatched) => {
        setvideoWatched(true);
    };
    return (
        <div>
            
            <Videoplayer
                playerRef={playerRef}
                onVideoEnd={handleVideoWatched}
                videoWatched={videoWatched} />
            
            {videoWatched
                ? (
                    <div>
                        <h2>Terminaste el video</h2>
                        <a>Ahora puedes relizar el quizz</a>
                        <BtnNavQuizz />
                        <BtnWatchVidAgain setvideoWatched={setvideoWatched} playerRef={playerRef} />
                    </div>
                )
                : null}
        </div>
    );
}

export default VideoplayerComp;
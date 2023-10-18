import React, { useState, useRef,  useEffect } from 'react';
import BtnNavQuizz from '../components/BtnNavQuizz';
import BtnWatchVidAgain from '../components/BtnWatchVidAgain';
import Videoplayer from '../components/Videoplayer';


const VideoplayerComp = () => {
    const playerRef = useRef(null);
    const [videoWatched, setvideoWatched] = useState(false);
    const handleVideoWatched = (videoWatched) => {
        setvideoWatched(true);
    };
    const [btnHab, setBtnHab] = useState(false);
    useEffect (() => {
    const info_lduda = JSON.parse(localStorage.getItem("metricaq"));
    const validateAnswer = info_lduda[0].check_video;
    console.log(validateAnswer);

   

    if (validateAnswer == 1) {
        setBtnHab(true);
    }}, [])
    return (
        <div>
            
            <Videoplayer
                playerRef={playerRef}
                onVideoEnd={handleVideoWatched}
                videoWatched={videoWatched} />
            
            {(videoWatched || btnHab)
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
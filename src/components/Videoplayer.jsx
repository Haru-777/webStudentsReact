import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const Videoplayer = ({ onVideoEnd, playerRef, videoWatched }) => {
    return (
        <ReactPlayer
            url={require('../documents/ver.mp4')}
            controls
            playing = {false}
            volume= {0.8}
            onEnded={onVideoEnd}
            ref= {playerRef}
            style = {videoWatched?{display:"none"}:null}/>
    );
}

export default Videoplayer;

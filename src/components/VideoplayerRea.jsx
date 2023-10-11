import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const VideoplayerRea = ({ onVideoEnd, playerRef, videoWatched }) => {
    const [responsev, setresponsev] = useState([]);

    useEffect(() => {
        const info_matter = JSON.parse(localStorage.getItem("rea"));
        if (!info_matter) return
        const id_materia = info_matter.id_CREA
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadContentREA',
            data: {
                id_CREA: id_materia
            }
        }).then((response) => {
            setresponsev(response.data)
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <h2>si fijddj</h2>
            <ReactPlayer
                url={responsev.urlrepositorio}
                controls
                playing={true}
                volume={0.8}
                ref={playerRef}
            />



        </>
    );
}

export default VideoplayerRea;

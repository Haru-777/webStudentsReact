import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const Videoplayer = ({ onVideoEnd, playerRef, videoWatched }) => {
    const [responsev, setresponsev] = useState([]);

    useEffect(() => {
        const info_matter = JSON.parse(localStorage.getItem("materia"));
        if (!info_matter) return
        const id_materia = info_matter.id_actividad
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadVideoActivity',
            data: {

                id_actividad: id_materia
            }
        }).then((response) => {
            setresponsev(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
                return (
                    <ReactPlayer
                        url={responsev.urlvideo}
                        controls
                        playing={false}
                        volume={0.8}
                        onEnded={onVideoEnd}
                        ref={playerRef}
                        style={videoWatched ? { display: "none" } : null} />
                )
            

        </>
    );
}

export default Videoplayer;

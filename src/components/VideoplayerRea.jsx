import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { useVideoUrl } from '../context';

const VideoplayerRea = ({ onVideoEnd, playerRef, videoWatched }) => {
    const [responsev, setresponsev] = useState([]);
    const {videoUrl} = useVideoUrl();

    useEffect(() => {
        const info_questiont = JSON.parse(localStorage.getItem("video"));
        console.log(info_questiont);
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_BACKEND_URL}/api/loadContentREA`,
            data: {
                id_CREA: info_questiont,
            }
        }).then(response => {
            setresponsev(response.data)
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

  //  return (
    //    <>
      //      {responsev[0]?.map((res, ides) => {
                return (
                    <>
                        <h2>Video REA</h2>
                        <ReactPlayer
                            //key={ides}
                            url={responsev[0]?.content.urlrepositorio}
                            controls
                            playing={true}
                            volume={0.8}
                            ref={playerRef}
                        />
                    </>
               // )
         //   })}
       // </>
    );
}

export default VideoplayerRea;

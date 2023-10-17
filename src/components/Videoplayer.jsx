import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const Videoplayer = ({ onVideoEnd, playerRef, videoWatched }) => {
    const [responsev, setresponsev] = useState([]);

    const [videoWatch, setvideoWatch] = useState(false);

    const [responsem, setresponsem] = useState([]);


    const handleVideoWatch = (videoWatch) => {
        setvideoWatch(true);
        if (videoWatch = true) {
                const info_acivity = JSON.parse(localStorage.getItem("materia"));
                const id_student = JSON.parse(localStorage.getItem("login"));
                //console.log(info_matter);  const id_materia = info_matter.id_materiaActiva
                 const id_acivity = info_acivity.id_actividad;
                 const  id_students = id_student.student.id_estudiante
                 console.log(id_student);
                axios({
                    method: 'post',
                    url: 'http://localhost:3001/api/uploadEventoActual',
                    data:{
                        id_estudiante: id_students,
                        id_actividad: id_acivity,
                        paso: "1"
                        
                    }
                    
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            
        }
        else {
            console.log("fallo");
        }
    };

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
                
                    <ReactPlayer
                        url={responsev.urlvideo}
                        controls
                        onPlay={handleVideoWatch}
                        volume={0.8}
                        onEnded={onVideoEnd}
                        ref={playerRef}
                        style={videoWatched ? { display: "none" } : null} />
                
            
        </>
    );
}

export default Videoplayer;

import React , { useEffect, useState } from 'react';
import axios from 'axios';


const Workshop = () => {
    const [responsew, setresponsew] = useState([]);

    useEffect(() => {
        const info_questionw = JSON.parse(localStorage.getItem("materia"));
        //if (!info_question.student) return
        const id_tstudet = info_questionw.id_actividad;
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadVideoActivity',
            data: {
                id_actividad: id_tstudet,
            
            }

        }).then(function (response) {
            console.log(response);  
            setresponsew(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }, [])

  return (
    <div>
        <a href={responsew.urltaller}> clicki</a>
    </div>
  )
}

export default Workshop;
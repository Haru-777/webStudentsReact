import React, { useEffect, useState } from 'react';
import '../styles/areafilter.scss';
import axios from 'axios';


const FilterOption = () => {
    const [response, setresponse] = useState([]);
    const [error, setError] = useState(" ");

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/api/loadAllcontents',
        }).then(response => {
            setresponse(response.data)
            console.log(response.data);
            console.log('entro al filtro');
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
            {response.map((filter, indexfilter) => {

                return (
                    <>
                                <option value="">{filter.id_materia}</option>
                        
                    </>
                )
            })}
        </>
    )
}

export default FilterOption;
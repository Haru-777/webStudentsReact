import React, {useState} from 'react';
import '../styles/subjectlist.scss';
import '../styles/global.scss';
import SubjectInfo from '../components/SubjectInfo';
import Filters from './Filters';
import Information from '../components/Information';
import InfSubj from '../modals/InfSubj';

const SubjetList = () => {
    const[openInfo, setOpenInfo] = useState(false);
    const handleclick = ()=>{
        setOpenInfo(true); 
        console.log('mal');
    }
    return (
        <section className='main-container'>
            <div className='Bottom'>
                <div className='search-cp'>
                    <Filters/>
                    <Information onClick={() => setOpenInfo(true)}/>
                    <div onClick={() => handleclick()} className="sda">
                    <InfSubj open={openInfo} onClose={() => setOpenInfo(false)}/>
                    </div>
                </div>
                <ul className='subjectlist'>
                    <li>
                        <SubjectInfo />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SubjetList;
import React, {useState} from 'react';
import '../styles/subjectlist.scss';
import '../styles/global.scss';
import SubjectInfo from '../components/SubjectInfo';
import Filters from './Filters';
import Information from '../components/Information';
import InfSubj from '../modals/InfSubj';

const SubjetList = () => {
    const[openInfo, setOpenInfo] = useState(false);

    return (
        <section className='main-container'>
            <div className='Bottom'>
                <div className='search-cp'>
                    <Filters/>
                    <Information onClick={() => setOpenInfo(true)}/>
                    
                    <InfSubj open={openInfo} onClose={() => setOpenInfo(false)}/>
                    
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
import React from 'react';
import '../styles/subjectlist.scss';
import '../styles/global.scss';
import SubjectInfo from '../components/SubjectInfo';
import Filters from './Filters';

const SubjetList = () => {
    return (
        <section className='main-container'>
            <div className='Bottom'>
                <div className='search-cp'>
                    <Filters/>
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
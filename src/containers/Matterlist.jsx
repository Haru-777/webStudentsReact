import React, { useState } from 'react';
import Matterinfo from '../components/MatterInfo';
import '../styles/matterlist.scss';
import '../styles/global.scss';
import Modal from '../modals/Modal';
import Search from '../components/Search';
import Information from '../components/Information';
import InfCou from '../modals/InfCou';
import SearchAcc from '../components/SearchAcc';

const Matterlist = () => {
	const[filterAcc, setFilterAcc] = useState('');
	const [openModal, setOpenModal] = useState(false);
	const handleChange = (e) => {setFilterAcc(e.target.value)}

	return (
		<section className="main-containercourses">
			<div className='container-courses'>
				<div className='search-sh'>
					<SearchAcc handleChange={handleChange}/>
					<Information onClick={() => setOpenModal(true)}/>
					<InfCou open={openModal} onClose={()=>setOpenModal(false)}/>
				</div>
				<ul className='matterList'>
					<li>
						<Matterinfo filter={filterAcc}/>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Matterlist;
import React, { useState } from 'react';
import Matterinfo from '../components/MatterInfo';
import '../styles/matterlist.scss';
import '../styles/global.scss';
import Modal from '../modals/Modal';
import Search from '../components/Search';
import Information from '../components/Information';
import InfCou from '../modals/InfCou';

const Matterlist = () => {

	const [openModal, setOpenModal] = useState(false);

	return (
		<section className="main-container">
			<div className='Bottom'>
				<div className='search-sh'>
					<Search/>
					<Information onClick={() => setOpenModal(true)}/>
					<InfCou open={openModal} onClose={()=>setOpenModal(false)}/>
				</div>
				<ul className='matterList'>
					<li>
						<Matterinfo />
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Matterlist;
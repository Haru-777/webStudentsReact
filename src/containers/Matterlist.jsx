import React, { useState } from 'react';
import Matterinfo from '../components/MatterInfo';
import '../styles/matterlist.scss';
import '../styles/global.scss';
import Modal from '../modals/Modal';
import Search from '../components/Search';
import Information from '../components/Information';

const Matterlist = () => {

	const [openModal, setOpenModal] = useState(false)

	return (
		<section className="main-container">
			<div className='Bottom'>
				<div className='search-sh'>
					<Search/>
					<Information/>
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
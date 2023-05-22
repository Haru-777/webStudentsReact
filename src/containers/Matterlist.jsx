import React, { useState } from 'react';
import Matterinfo from '../components/MatterInfo';
import '../styles/matterlist.scss';
import '../styles/global.scss';
import Modal from '../modals/Modal';

const Matterlist = () => {

	const [openModal, setOpenModal] = useState(false)

	return (
		<section className="main-container">
			<div className='Bottom'>
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
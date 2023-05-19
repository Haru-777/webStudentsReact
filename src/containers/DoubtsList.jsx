import React, { useState } from 'react';
import '../styles/matterlist.scss';
import '../styles/global.scss'
import Modal from '../modals/Modal';
import Doubtsinfo from '../components/Doubtsinfo';

const DoubtsList = () => {

	const [openModal, setOpenModal] = useState(false)

	return (
		<section className="main-container">
			<div className='Bottom'>
				<ul className='matterList'>
					<li>
						<Doubtsinfo />
					</li>
				</ul>
			</div>
		</section>
	);
}

export default DoubtsList;
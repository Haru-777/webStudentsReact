import React, {useState} from 'react';
import Matterinfo from '../components/MatterInfo';
import '../styles/matterlist.scss';
import '../styles/global.scss'
import Modal from '../modals/Modal';

const Matterlist = () => {

	const[openModal, setOpenModal] = useState(true)

	return (
		<section className="main-container">
			<div className='Bottom'>
                <ul className='matterList'>
				<li>
					<Matterinfo />
					<button>Modal</button>
					<Modal open = {openModal}/>
					</li>
                </ul>
			</div>
		</section>
	);
}

export default Matterlist;
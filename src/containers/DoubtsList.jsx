import React, { useState } from 'react';
import '../styles/matterlist.scss';
import '../styles/global.scss';
import '../styles/subjectlist.scss';
import Infdoubts from '../modals/Infdoubts';
import Doubtsinfo from '../components/Doubtsinfo';
import Filters from './Filters';
import Information from '../components/Information';

const DoubtsList = () => {

	const [openInfoDoubts, setOpenInfoDoubts] = useState(false);

	return (
		<section className="main-container">
			<div className='container-doubts'>
				<div className='search-cp'>
					<Filters />
					<Information onClick={() => setOpenInfoDoubts(true)}/>
					<Infdoubts open ={openInfoDoubts} onClose={() =>setOpenInfoDoubts(false)}/>
				</div>
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
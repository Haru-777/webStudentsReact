import React, { useState } from 'react';
import '../styles/matterlist.scss';
import '../styles/global.scss'
import ReaInfo from '../components/ReaInfo';

export const ReaList = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <section className="main-container">
			<div className='Bottom'>
				<ul className='matterList'>
					<li>
						<ReaInfo />
					</li>
				</ul>
			</div>
		</section>
  );
}
 export default ReaList;
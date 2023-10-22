import React, { useState } from 'react';
import '../styles/matterlist.scss';
import '../styles/global.scss'
import ReaInfo from '../components/ReaInfo';
import SearchREA from '../components/SearchREA';
import AreasFilter from '../components/AreasFilter';

export const ReaList = () => {
	const[filterREA, setFilterREA] = useState('');
	const [responsef, setresponsef] = useState([]);
    const [openModal, setOpenModal] = useState(false);
	const handleChange = (e) => {setFilterREA(e.target.value)}
  return (
    <section className="main-container">
			<div className='container-courses'>
				<div className='search-sh'>
					<SearchREA handleChange={handleChange}/>
					<AreasFilter setresponsef={setresponsef} />
				</div>
				<ul className='matterList'>
					<li>
						<ReaInfo responsef={responsef}  filter={filterREA}/>
					</li>
				</ul>
			</div>
		</section>
  );
}
 export default ReaList;
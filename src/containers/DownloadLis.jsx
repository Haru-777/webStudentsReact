import React from 'react'
import DownloadInfo from '../components/DownloadInfo'

export const DownloadLis = () => {
  return (
    <section className="main-container">
			<div className='Bottom'>
				<ul className='matterList'>
					<li>
						<DownloadInfo />
					</li>
				</ul>
			</div>
		</section>
  )
}
export default DownloadLis;

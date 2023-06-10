import React from 'react'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = () => {
  return (
	<div className='topbar'>
	  <div className='topbarWrapper'>
		<div className='topLeft'>
			<span className='logo'>ADamS Admin</span>
		</div>
		<div className='topRight'>
			<div className='topbarIconContainer'>
				<NotificationsNoneIcon />
				<span className='topIconBadge'>2</span>
			</div>
			<div className='topbarIconContainer'>
				<LanguageIcon />
				<span className='topIconBadge'>2</span>
			</div>
			<div className='topbarIconContainer'>
				<SettingsIcon />				
			</div>
			<img src="https://i.ibb.co/cXFnLLV/3.png" alt="cute girl" className="topAvatar" />
		</div>
	  </div>
	</div>
  )
}

export default Topbar

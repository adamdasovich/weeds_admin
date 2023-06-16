import './widgetSmall.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSmall = () => {
  return (
	<div className='widgetSmall'>
	  <span className='widgetSmallTitle'>New Members</span>
	  	<ul className='widgetSmallList'>
			<li className='widgetSmallListItem'>
				<img src='https://i.ibb.co/cXFnLLV/3.png' alt='user' className='widgetSmallImg' />
				<div className='widgetSmallUser'>
				<span className='widgetSmallUserName'>Anna Keller</span>
				<span className='widgetSmallUserTitle'>Software Engineer</span>
				</div>
				<button className='widgetSmallButton'>
				<VisibilityIcon className='visibility-icon' />
					Display
				</button>
			</li>
			<li className='widgetSmallListItem'>
				<img src='https://i.ibb.co/cXFnLLV/3.png' alt='user' className='widgetSmallImg' />
				<div className='widgetSmallUser'>
				<span className='widgetSmallUserName'>Anna Keller</span>
				<span className='widgetSmallUserTitle'>Software Engineer</span>
				</div>
				<button className='widgetSmallButton'>
				<VisibilityIcon className='visibility-icon' />
					Display
				</button>
			</li>
			<li className='widgetSmallListItem'>
				<img src='https://i.ibb.co/cXFnLLV/3.png' alt='user' className='widgetSmallImg'/>
				<div className='widgetSmallUser'>
				<span className='widgetSmallUserName'>Anna Keller</span>
				<span className='widgetSmallUserTitle'>Software Engineer</span>
				</div>
				<button className='widgetSmallButton'>
				<VisibilityIcon className='visibility-icon'/>
					Display
				</button>
			</li>
		</ul>
	</div>
  )
}

export default WidgetSmall

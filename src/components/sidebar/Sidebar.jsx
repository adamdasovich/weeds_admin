import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
	<div className='sidebar'>
		<div className='sidebarWrapper' >
			<div className='sidebarMenu'>
				<h3 className='sidebarTitle'>Dashboard</h3>
				<ul className='sidebarList'>
					<Link to='/' className='link'>
					<li className='sidebarListItem active'>
						<LineStyleIcon className='sidebarIcon' />
						Home
					</li>
					</Link>
					<li className='sidebarListItem'>
						<TimelineIcon className='sidebarIcon' />
						Analytics
					</li>
					<li className='sidebarListItem'>
						<TrendingUpIcon className='sidebarIcon' />
						Sales
					</li>
				</ul>
			</div>
			<div className='sidebarMenu'>
				<h3 className='sidebarTitle'>Quick Menu</h3>
				<ul className='sidebarList'>
					<Link to='/users' className='link'>
							<li className='sidebarListItem active'>
								<PersonOutlineOutlinedIcon className='sidebarIcon' />
								User
							</li>
					</Link>
					<Link to='/products' className='link'>
							<li className='sidebarListItem'>					
								<StorefrontOutlinedIcon className='sidebarIcon' />
								Products
							</li>
					</Link>
					<li className='sidebarListItem'>
						<PaidOutlinedIcon className='sidebarIcon' />
						Transactions
					</li>
					<li className='sidebarListItem'>
						<AssessmentOutlinedIcon className='sidebarIcon' />
						Reports
					</li>
				</ul>
			</div>
			<div className='sidebarMenu'>
				<h3 className='sidebarTitle'>Notification</h3>
				<ul className='sidebarList'>
					<li className='sidebarListItem active'>
						<MailOutlinedIcon className='sidebarIcon' />
						Mail
					</li>
					<li className='sidebarListItem'>
						<QuestionAnswerOutlinedIcon className='sidebarIcon' />
						Feedback
					</li>
					<li className='sidebarListItem'>
						<ChatBubbleOutlineOutlinedIcon className='sidebarIcon' />
						Messages
					</li>
				</ul>
			</div>
			<div className='sidebarMenu'>
				<h3 className='sidebarTitle'>Staff</h3>
				<ul className='sidebarList'>
					<li className='sidebarListItem active'>
						<WorkOutlineOutlinedIcon className='sidebarIcon' />
						Manage
					</li>
					<li className='sidebarListItem'>
						<TimelineIcon className='sidebarIcon' />
						Analytics
					</li>
					<li className='sidebarListItem'>
						<AccountTreeOutlinedIcon className='sidebarIcon' />
						Reports
					</li>
				</ul>
			</div>
			
		</div>
	</div>
  )
}

export default Sidebar
import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarToday from '@mui/icons-material/CalendarToday';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import LocationSearching from '@mui/icons-material/LocationSearching';
import Publish from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';

const User = () => {
  return (
	<div className='user'>
		<div className="userTitleContainer">
			<h1 className="userTitle">Edit User</h1>
			<Link to='/create'>
			<button className="userAddButton">Create</button>
			</Link>
		</div>
		<div className="userContainer">
			<div className="userShow">
				<div className='userShowTop' >
				<img src='https://i.ibb.co/cXFnLLV/3.png' alt='' className='userShowImg' />
				
				<div className='userShowTopTitle' >
					<span className='userShowUsername' >Anna Becker</span>
					<span className='userShowUserTitle' >Software Engineer</span>
				</div>
				
			</div>
				<div className='userShowBottom' >
					<span className='userShowTitle' >Account Details</span>
					<div className='userShowInfo' >
						<PermIdentityIcon className='userShowIcon' />					
						<span className='userShowInfoTitle'>adamd</span>
					</div>
					<div className='userShowInfo' >
						<CalendarToday className='userShowIcon' />					
						<span className='userShowInfoBday'>Jan 2</span>
					</div>
					<span className='userShowTitle' >Contact Details</span>
					<div className='userShowInfo' >
						<PhoneAndroid className='userShowIcon' />					
						<span className='userShowInfoPhone'>647-574-5467</span>
					</div>
					<div className='userShowInfo' >
						<LocationSearching className='userShowIcon' />					
						<span className='userShowInfoCountry'>Toronto | Canada</span>
					</div>

				</div>
			</div>
			<div className='userUpdate'>
				<span className='userUpdateTitle'>Edit</span>
				<form className='userUpdateForm'>
					<div className='userUpdateLeft'>
						<div className='userUpdateItem'>
							<label>Username</label>
							<input 
								type='text' 
								placeholder='adamd' 
								className='userUpdateInput' 
							/>
						</div>
						<div className='userUpdateItem'>
							<label>email</label>
							<input type='text' placeholder='adamd' className='userUpdateInput' />
						</div>
						<div className='userUpdateItem'>
							<label>phone</label>
							<input type='text' placeholder='adamd' className='userUpdateInput' />
						</div>
						<div className='userUpdateItem'>
							<label>address</label>
							<input type='text' placeholder='adamd' className='userUpdateInput' />
						</div>
					</div>

					<div className='userUpdateRight'>
						<div className='userUpdateUpload'>
							<img className='userUpdateImg' src='https://i.ibb.co/cXFnLLV/3.png' alt=''/>
							<label htmlFor='file'><Publish className='userUpdateIcon' /></label>
							<input type='file' id='file' style={{display: 'none'}} />
						</div>
						<button className='userUpdateButton'>Update</button>
					</div>

				</form>




			</div>
		</div>
	</div>
  )
}

export default User
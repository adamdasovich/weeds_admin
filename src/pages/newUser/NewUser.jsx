import './newUser.css'

const newUser = () => {
  return (
	<div className='newUser'>
		<h1 className='newUserTitle'>New User</h1>
		<form className='newUserForm'>
			<div className='newUserItem'>
				<label>Username</label>
				<input type='text' placeholder='john' />
			</div>
			<div className='newUserItem'>
				<label>Full Name</label>
				<input type='text' placeholder='Adam Dasovch' />
			</div>
			<div className='newUserItem'>
				<label>Email</label>
				<input type='email' placeholder='adam@gmail.com' />
			</div>
			<div className='newUserItem'>
				<label>Password</label>
				<input type='passworkd' placeholder='password' />
			</div>
			<div className='newUserItem'>
				<label>Phone Number</label>
				<input type='text' placeholder='647 574 5467' />
			</div>
			<div className='newUserItem'>
				<label>Address</label>
				<input type='text' placeholder='Toronto | Canada' />
			</div>
			<div className='newUserItem'>
				<label>Gender</label>
					<div className='newUserGender'>
						<input type='radio' name='gender' id='male' value='male' />
						<label for='male'>Male</label>
						<input type='radio' name='gender' id='female' value='female' />
						<label for='female'>Female</label>
					</div>
			</div>
			<div className='newUserItem'>
				<label>Active</label>
				<select className='newUserSelect' name='active' id='active'>
					<option value='yes'>Yes</option>
					<option value='no'>No</option>
					<option value='noyb'>Non of your business!</option>
				</select>
			</div>
			<button className='newUserButton'>Create</button>
		</form>
	</div>
  )
}

export default newUser
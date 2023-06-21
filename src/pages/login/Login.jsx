import './login.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()

	const handleClick = (e) => {
		e.preventDefault()
		login(dispatch, { username, password })
	}

  return (
	<div className='login'>
		<input className='username' type='text' placeholder='username' onChange={e => setUsername(e.target.value)} />
		<input className='password' type='password' placeholder='password' onChange={e => setPassword(e.target.value)} />
		<button onClick={handleClick}>Login</button>
	</div>
  )
}

export default Login
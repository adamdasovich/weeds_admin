import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const UserList = () => {
	const [data, setData] = useState(userRows)

	const handleDelete = (id) => {
		setData(data.filter(item => item.id !== id))
		console.log(id)
	}
	

	const columns = [
  		{ field: 'id', headerName: 'ID', width: 150 },
  		{ field: 'user', headerName: 'User', width: 310, renderCell: (params)  => {
			return (
				<div className='userListUser'>
					<img className='userListImg' src={params.row.avatar} alt='' />
					{params.row.userName}
				</div>
			)
		} },
  		{ field: 'email', headerName: 'email', width: 300 },
  		{ field: 'status', headerName: 'status', width: 250 },
		{ field: 'transaction', headerName: 'transaction', width: 200},
		{ field: 'action', headerName: 'action', width: 250, renderCell: (params)  => {
			return (
				<>
					<Link to={'/user/' + params.row.id}>
						<button className='userListEdit'>Edit</button>
					</Link>
					<Link>
						<DeleteOutlineIcon 
							className='userListDelete'
							onClick={() => handleDelete(params.row.id)}
						/>
					</Link>					
				</>
			)
		} },
];


  return (
	<div className='userList'>
	  <DataGrid 
	  	rows={data} 
		disableSelectionOnClick 
		columns={columns} 
		checkboxSelection={true} 
		pageSize={20} 
	/>
	</div>
  )
}

export default UserList

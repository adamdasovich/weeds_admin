import './userList.css'
import { DataGrid } from '@mui/x-data-grid';



const UserList = () => {
	const columns = [
  		{ field: 'id', headerName: 'ID', width: 100 },
  		{ field: 'userName', headerName: 'username', width: 170 },
  		{ field: 'email', headerName: 'email', width: 200 },
  		{ field: 'status', headerName: 'status', width: 150 },
		{ field: 'transaction', headerName: 'transaction', width: 200}
];

	const rows = [
  		{
			id: 1,
			userName: 'Jon Snow',
			avatar:'https://i.ibb.co/cXFnLLV/3.png',
			email: 'adamdasovich@gmail.com',
			status: 'active',
			transaction: '$120.00'
		},
		{
			id: 2,
			userName: 'Jon Snow',
			avatar:'https://i.ibb.co/cXFnLLV/3.png',
			email: 'adamdasovich@gmail.com',
			status: 'active',
			transaction: '$120.00'
		},
		{
			id: 3,
			userName: 'Jon Snow',
			avatar:'https://i.ibb.co/cXFnLLV/3.png',
			email: 'adamdasovich@gmail.com',
			status: 'active',
			transaction: '$120.00'
		}];
  return (
	<div className='userList'>
	  <DataGrid rows={rows} columns={columns} />
	</div>
  )
}

export default UserList

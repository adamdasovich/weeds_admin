import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => {
	  const [data, setData] = useState(productRows);

	  const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	  };
	  
  return (
	<div className='productList' >
		<DataGrid 
	  	rows={productRows} 
		disableSelectionOnClick 
		columns={columns} 
		checkboxSelection={true} 
		pageSize={20} 
	/>
	</div>
  )
}

export default ProductList
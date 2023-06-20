import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/charts/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'

const Product = () => {
  return (
	<div className='product'>
	  <div className="productTitleContainer">
		<h1 className="productTitle">Product</h1>
		<Link to='/newProduct'>
			<button className="productAddButton">Create</button>
		</Link>
	  </div>
	  <div className="productTop">
		<div className="productTopLeft">
			<div className='adam'><Chart className='myChart' data={productData} dataKey='Sales' title='Sales Performance' />
		</div>
		</div>
		<div className="productTopRight">
			<div className="productInfoTop">
				<img className='productInfoImage' src='https://cdn.shopify.com/s/files/1/1257/6551/products/thrusterpic3.jpg?v=1684430105&width=1946' alt=''/>
				<span className="productName">Weeds B Gone Thruster</span>
			</div>
			<div className="productInfoBottom">
				<div className="productInfoItem">
					<span className="productInfoKey">id:</span>
					<span className="productInfoValue">123</span>
				</div>
				<div className="productInfoItem">
					<span className="productInfoKey">sales:</span>
					<span className="productInfoValue">5123</span>
				</div>
				<div className="productInfoItem">
					<span className="productInfoKey">active:</span>
					<span className="productInfoValue">yes</span>
				</div>
				<div className="productInfoItem">
					<span className="productInfoKey">in stock:</span>
					<span className="productInfoValue">no</span>
				</div>	
			</div>
		</div>
	  </div>
	  <div className="productBottom">
		<form className="productForm">
			<div className="productFormLeft">
				<label>Product Name</label>
				<input type="text" placeholder="Weeds B Gone Thruster" />
				<label>In Stock</label>
				<select name="inStock" id="idStock">
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
				<label>Active</label>
				<select name="active" id="active">
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</div>
			<div className="productFormRight">
				<div className="productUpload">
					<img className='productUploadImage' src='https://cdn.shopify.com/s/files/1/1257/6551/products/thrusterpic3.jpg?v=1684430105&width=1946' alt=''/>
					<label htmlFor="file">
						<Publish className='productUploadIcon' />
					</label>
					<input type="file" id='file' style={{display: 'none'}} />
				</div>
				<button className="productButton">Update</button>
			</div>
		</form>
	  </div>
	</div>
  )
}

export default Product

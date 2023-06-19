import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";


function App() {
	return (
		<Router>
			<Topbar />
			<div className="container">
				<Sidebar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/users" element={<UserList />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/newproduct" element={<Home />} />
					<Route path="/product/:productId" element={<Home />} />
					<Route path="/newuser" element={<NewUser />} />
					<Route path="/user/:userId" element={<User />} />
					<Route path="/settings" element={<Home />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App;

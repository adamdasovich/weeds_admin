import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
	return (
		<Router>
			<Topbar />
			<div className="container">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/users" element={<UserList />} />
					<Route path="/products" element={<Home />} />
					<Route path="/newproduct" element={<Home />} />
					<Route path="/product/:productId" element={<Home />} />
					<Route path="/newuser" element={<Home />} />
					<Route path="/user/:userId" element={<Home />} />
					<Route path="/settings" element={<Home />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App;

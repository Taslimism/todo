import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Home from "./pages/Main";

const App = () => (
	<Router>
		<Routes>
			<Route path='/' element={<Navigate to='/register' />} />
			<Route path='/register' element={<LoginSignup />} />
			<Route path='/login' element={<LoginSignup />} />
			<Route path='/home' element={<Home />} />
		</Routes>
	</Router>
);

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Report from "./pages/Report";
import {Switch, Route} from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/report' component={Report} />
			</Switch>
		</div>
	);
}

export default App;

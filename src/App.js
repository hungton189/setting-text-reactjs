import './App.css';
import {useState} from "react";
import ColorPicker from './components/ColorPicker/ColorPicker.js';
import Reset from "./components/Reset/Reset.js";
import Result from "./components/Result/Result.js";
import SizeSetting from "./components/SizeSetting/SizeSetting.js";

function App() {
	const [color,setColor] = useState("red");

	const receiveColor = (color) => 
	{
		setColor(color);
	}

	return (
		<div className="container">
			<div className="row">
				<ColorPicker color={color} receiveColor = {receiveColor}/>
				<SizeSetting />
			</div>
			<div className="row">
				<Reset />
				<Result color={color}/>
			</div>
		</div>
	);
}

export default App;

import './App.css';
import {useState} from "react";
import ColorPicker from './components/ColorPicker/ColorPicker.js';
import Reset from "./components/Reset/Reset.js";
import Result from "./components/Result/Result.js";
import SizeSetting from "./components/SizeSetting/SizeSetting.js";

function App() {
	const [color,setColor] = useState("red");
	const [font,setFont] = useState(15);

	const receiveColor = (color) => 
	{
		setColor(color);
	}

	const receiveFont = (font) =>
	{
		setFont(font);
	}

	const reset = () =>
	{
		setColor("red");
		setFont(15);
	}

	return (
		<div className="container">
			<div className="row">
				<ColorPicker color={color} receiveColor = {receiveColor}/>
				<SizeSetting font={font} receiveFont ={receiveFont}/>
			</div>
			<div className="row">
				<Reset reset={reset}/>
				<Result color={color} font={font}/>
			</div>
		</div>
	);
}

export default App;

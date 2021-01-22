import './App.css';
import ColorPicker from './components/ColorPicker/ColorPicker.js';
import Reset from "./components/Reset/Reset.js";
import Result from "./components/Result/Result.js";
import SizeSetting from "./components/SizeSetting/SizeSetting.js";

function App() {
  return (
    <div className="container">
		<div class="row">
			<ColorPicker />
			<SizeSetting />
		</div>
		<div class="row">
			<Reset />
			<Result />
		</div>
    </div>
  );
}

export default App;

import "./ColorPicker.css";
function ColorPicker(props) {
	
	const colors = ["red","green","blue","yellow","#bcd","#865833","#658346","#123937","#579579"];

	const showColor = (color) => 
	{
		return {
			backgroundColor: color
		};
	}
	const elementColor = colors.map((color,index) => {
		return <span  
				key={index}
				style={showColor(color)} 
				className={(color === props.color)? "active" : "" }
				onClick={()=>props.receiveColor(color)} 
				>
				</span>
	})
	return (
		<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 color-picker">
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Color picker</h3>
				</div>
				<div className="panel-body">
					{elementColor}
				</div>
			</div>
		</div>
	);
}

export default ColorPicker;

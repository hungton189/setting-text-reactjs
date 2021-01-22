import "./Result.css";
function Result(props) {

	const setting = ()=>
	{
		return {
			color : props.color,
			borderColor : props.color,
			fontSize : props.font
		};
	};
	return (  
		<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 result">
			<p className="title">Color: {props.color} -*-*- Font-size: {props.font}px</p>
			<div id="content" className="content" style={setting()}>
				Nội dung setting
			</div>
		</div>
	);
}

export default Result;

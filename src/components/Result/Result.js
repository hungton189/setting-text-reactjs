import "./Result.css";
function Result(props) {

	const setColor = ()=>
	{
		return {
			color : props.color,
			borderColor : props.color,
		};
	};
	return (  
		<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 result">
			<p className="title">Color: red -*-*- Font-size: 15px</p>
			<div id="content" className="content" style={setColor()}>
				Nội dung setting
			</div>
		</div>
	);
}

export default Result;

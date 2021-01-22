import "./SizeSetting.css";
function SizeSetting(props) {
	const increase = ()=>
	{
		if(props.font >= 40) return;
		props.receiveFont(props.font + 1);
	}
	const decrease = ()=>
	{
		if(props.font <= 8) return;
		props.receiveFont(props.font - 1);
	}
	return (
		<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 size-setting">
			<div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">Size {props.font}px</h3>
				</div>
				<div className="panel-body">
					<button type="button" className="btn btn-success " onClick={decrease}>Giảm</button>
					<button type="button" className="btn btn-success ml-10" onClick={increase}>Tăng</button>
				</div>
			</div>
		</div>
	);
}

export default SizeSetting;

import "./SizeSetting.css";
function SizeSetting() {
  return (
	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 size-setting">
		<div className="panel panel-info">
			<div className="panel-heading">
				<h3 className="panel-title">Size 15px</h3>
			</div>
			<div className="panel-body">
				<button type="button" className="btn btn-success ">Giảm</button>
				<button type="button" className="btn btn-success ml-10">Tăng</button>
			</div>
		</div>
	</div>
  );
}

export default SizeSetting;

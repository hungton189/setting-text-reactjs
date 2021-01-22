import "./Reset.css";
function Reset(props) {
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 reset">
    	<button type="button" class="btn btn-success" onClick={props.reset}>Reset</button>
    </div>
  );
}

export default Reset;

import "./style.css";
import { connect } from "react-redux";
import { Button } from "reactstrap";
function SongDetail(props) {
  return (
    <div className="card_wrapper">
      <div className="card">
        <div className="card__flex1">
          <p className="">Songs</p>
        </div>
        <div className="card__flex2">
          <p>Title:{props.song.title ?? ""}</p>
          <p>Duration:{props.song.duration ?? ""}</p>
          <Button
            color="primary"
            size="lg"
            onClick={() => {
              props.setOpen(!props.isOpen);
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
const mapStatetoProps = (state) => {
  return {
    song: state.selectedSong,
  };
};
export default connect(mapStatetoProps)(SongDetail);

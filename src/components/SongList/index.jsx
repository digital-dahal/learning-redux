import React, {  useState } from "react";
import "./style.css";

import { selectSong } from "../../actions";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import SongDetail from "../SongDetail";
function SongList(props) {
  const [isOpen, setOpen] = useState(false);
  function renderList() {
    return props.state.map((song, i) => {
      return (
        <div className="card" key={i}>
          <div className="song__title">{song.title}</div>
          <div className="song_Btn">
            <Button
              color="primary"
              size="lg"
              className="btn"
              onClick={(e) => {
                setOpen(!isOpen);
                props.selectSong(song);
              }}
            >
              Select
            </Button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="song__container">
      <div className="card__container">{renderList()}</div>
      <div className="songDetail__wrapper" >
        {isOpen == true ? <SongDetail setOpen={setOpen} isOpen={isOpen} /> : ""}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { state: state.songs };
};
export default connect(mapStateToProps, { selectSong })(SongList);

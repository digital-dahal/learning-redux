import { combineReducers } from "redux";

const songReducer = () => {
  return [
    {
      title: "Don't Play Games",
      duration: "2:30",
    },
    {
      title: "Parlaya",
      duration: "2:30",
    },
    {
      title: "Katai Uslai",
      duration: "2:30",
    },
    {
      title: "Macarena",
      duration: "2:30",
    },
  ];
};

const selectedSongReducer = (songSelected = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return songSelected;
};
export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer
});
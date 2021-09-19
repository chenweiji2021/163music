import * as actionTypes from "./constants";

const defaultState = {
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0, // 0,循环; 1,随机; 2,单曲
  lyricList: [],
  currentLyricIndex: 0,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_LIST:
      return { ...state, playList: action.payload };
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return { ...state, currentSongIndex: action.payload };
    case actionTypes.CHANGE_CURRENT_SONG:
      return { ...state, currentSong: action.payload };
    case actionTypes.CHANGE_SEQUENCE:
      return { ...state, sequence: action.payload };
    case actionTypes.CHANGE_LYRIC_LIST:
      return { ...state, lyricList: action.payload };
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return { ...state, currentLyricIndex: action.payload };
    default:
      return state;
  }
}

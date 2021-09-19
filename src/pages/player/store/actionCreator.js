import * as actionTypes from "./constants";
import { getSongDetail } from "../../../services/player";
import { getRandomNumber } from "../../../utils/math-utils";

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  payload: playList,
});
const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  payload: index,
});
const changeCurrentSongAction = (currentSongObj) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  payload: currentSongObj,
});
export const getSongDetailAction = (ids) => {
  return async (dispatch, getState) => {
    const playList = getState().player.playList;
    const songIndex = playList.findIndex((songObj) => songObj.id === ids);

    if (songIndex > 0) {
      //  playList中存在这首歌
      dispatch(changeCurrentSongIndexAction(songIndex));
      dispatch(changeCurrentSongAction(playList[songIndex]));
    } else {
      //  playList中不存在这首歌
      const data = await getSongDetail(ids);
      const songObj = data.songs[0];
      const newPlayList = [...playList, songObj];
      dispatch(changePlayListAction(newPlayList));
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
      dispatch(changeCurrentSongAction(songObj));
    }
  };
};

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  payload: sequence,
});
export const changeNextMusicAction = (tag) => {
  return (dispatch, getState) => {
    let currentSongIndex = getState().player.currentSongIndex;
    const sequence = getState().player.sequence;
    const playList = getState().player.playList;
    switch (sequence) {
      case 1: // 随机
        let randomIndex = getRandomNumber(playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default:
        // 循环&单曲
        currentSongIndex += tag;
        if (currentSongIndex > playList.length - 1) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
    }
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(playList[currentSongIndex]));
  };
};

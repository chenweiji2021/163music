import * as actionType from "./constant";
import {
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getTopRanking,
  getSettleSinger,
} from "../../../../../services/recommend";

const changeTopBannerAction = (bannerList) => ({
  type: actionType.CHANGE_TOP_BANNER,
  payload: bannerList,
});
export const getTopBannerAction = () => {
  return async (dispatch) => {
    const data = await getTopBanner();
    dispatch(changeTopBannerAction(data.banners));
  };
};

const changeHotRecommendAction = (hotRecommendList) => ({
  type: actionType.CHANGE_HOT_RECOMMEND,
  payload: hotRecommendList,
});
export const getHotRecommendAction = (limit) => {
  return async (dispatch) => {
    const data = await getHotRecommend(limit);
    dispatch(changeHotRecommendAction(data.result));
  };
};

const changeNewAlbumAction = (newAlbumList) => ({
  type: actionType.CHANGE_NEW_ALBUM,
  payload: newAlbumList,
});
export const getNewAlbumAction = (limit) => {
  return async (dispatch) => {
    const data = await getNewAlbum(limit);
    dispatch(changeNewAlbumAction(data.albums));
  };
};

const changeUpRankingAction = (upRankingList) => ({
  type: actionType.CHANGE_UP_RANKING,
  payload: upRankingList,
});
const changeNewRankingAction = (newRankingList) => ({
  type: actionType.CHANGE_NEW_RANKING,
  payload: newRankingList,
});
const changeOriginRankingAction = (originRankingList) => ({
  type: actionType.CHANGE_ORIGIN_RANKING,
  payload: originRankingList,
});
export const getRankingAction = (idx) => {
  return async (dispatch) => {
    const data = await getTopRanking(idx);
    switch (idx) {
      case 3:
        dispatch(changeUpRankingAction(data.playlist));
        break;
      case 0:
        dispatch(changeNewRankingAction(data.playlist));
        break;
      case 2:
        dispatch(changeOriginRankingAction(data.playlist));
        break;
      default:
        break;
    }
  };
};

const changeSettleSingerAction = (settleSingerList) => ({
  type: actionType.CHANGE_SETTLE_SINGER,
  payload: settleSingerList,
});
export const getSettleSingerAction = (limit) => {
  return async (dispatch) => {
    const data = await getSettleSinger(limit);
    dispatch(changeSettleSingerAction(data.artists));
  };
};

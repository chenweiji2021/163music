import * as actionType from "./constant";
import {
  getTopBanner,
  getHotRecommend,
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

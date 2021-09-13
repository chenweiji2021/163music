import * as actionType from "./constant";
import { getTopBanner } from "../../../../../services/recommend";

const changeTopBannerAction = (bannerList) => ({
  type: actionType.CHANGE_RECOMMEND_BANNER,
  payload: bannerList,
});

export const getTopBannerAction = () => {
  return async (dispatch) => {
    const data = await getTopBanner();
    dispatch(changeTopBannerAction(data.banners));
  };
};

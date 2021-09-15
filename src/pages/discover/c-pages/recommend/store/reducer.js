import * as actionType from "./constant";

const defaultState = {
  bannerList: [],
  hotRecommendList: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNER:
      return { ...state, bannerList: action.payload };
    case actionType.CHANGE_HOT_RECOMMEND:
      return { ...state, hotRecommendList: action.payload };
    default:
      return state;
  }
}

export default reducer;

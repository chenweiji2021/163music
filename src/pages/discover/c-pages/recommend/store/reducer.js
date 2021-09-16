import * as actionType from "./constant";

const defaultState = {
  bannerList: [],
  hotRecommendList: [],
  newAlbumList: [],

  upRankingList: [],
  newRankingList: [],
  originRankingList: [],

  settleSingerList: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNER:
      return { ...state, bannerList: action.payload };
    case actionType.CHANGE_HOT_RECOMMEND:
      return { ...state, hotRecommendList: action.payload };
    case actionType.CHANGE_NEW_ALBUM:
      return { ...state, newAlbumList: action.payload };
    case actionType.CHANGE_UP_RANKING:
      return { ...state, upRankingList: action.payload };
    case actionType.CHANGE_NEW_RANKING:
      return { ...state, newRankingList: action.payload };
    case actionType.CHANGE_ORIGIN_RANKING:
      return { ...state, originRankingList: action.payload };
    case actionType.CHANGE_SETTLE_SINGER:
      return { ...state, settleSingerList: action.payload };
    default:
      return state;
  }
}

export default reducer;

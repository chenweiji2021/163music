import * as actionType from "./constant";

const defaultState = {
  bannerList: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_RECOMMEND_BANNER:
      return { ...state, bannerList: action.payload };
    default:
      return state;
  }
}

export default reducer;

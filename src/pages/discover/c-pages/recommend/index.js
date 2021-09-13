import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTopBannerAction } from "./store/actionCreator";

const Recommend = () => {
  const bannerList = useSelector((state) => {
    return state.recommend.bannerList;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, []);
  console.log("bannerList =>", bannerList);

  return <div>Recommend</div>;
};

export default memo(Recommend);

import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getHotRecommendAction } from "../../store/actionCreator";
import { HotRecommendWrapper } from "./style";

import ThemeHeaderRCM from "../../../../../../components/theme-header-rcm";
import SongCover from "../../../../../../components/song-cover";

const HotRecommend = () => {
  const hotRecommendList = useSelector(
    (state) => state.recommend.hotRecommendList,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM
        title={"热门推荐"}
        keywords={["华语", "流行", "电子", "摇滚"]}
      />
      <div className={"recommend-list"}>
        {hotRecommendList.map((item) => {
          return <SongCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
};

export default memo(HotRecommend);

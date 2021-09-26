import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getRankingAction } from "../../store/actionCreator";

import { RankingWrapper } from "./style";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import TopRanking from "@/components/top-ranking";

const RecommendRanking = () => {
  const { upRankingList, newRankingList, originRankingList } = useSelector(
    (state) => state.recommend,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRankingAction(19723756));
    dispatch(getRankingAction(3779629));
    dispatch(getRankingAction(2884035));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title={"榜单"} />
      <div className={"tops"}>
        <TopRanking info={upRankingList} />
        <TopRanking info={newRankingList} />
        <TopRanking info={originRankingList} />
      </div>
    </RankingWrapper>
  );
};

export default memo(RecommendRanking);

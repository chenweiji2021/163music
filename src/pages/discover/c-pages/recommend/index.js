import React, { memo } from "react";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import TopBanner from "./c-components/top-banner";
import HotRecommend from "./c-components/hot-recommend";
import NewAlbum from "./c-components/new-album";
import RecommendRanking from "./c-components/recommend-ranking";
import UserLogin from "./c-components/user-login";
import SettleSinger from "./c-components/settle-singer";

const Recommend = () => {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className={"wrap-v2"}>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
};

export default memo(Recommend);

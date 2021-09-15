import React, { memo } from "react";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import TopBanner from "./c-components/top-banner";
import HotRecommend from "./c-components/hot-recommend";

const Recommend = () => {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className={"wrap-v2"}>
        <RecommendLeft>
          <HotRecommend />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
};

export default memo(Recommend);

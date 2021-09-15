import React, { memo } from "react";
import { HotRecommendWrapper } from "./style";

const HotRecommend = () => {
  return (
    <HotRecommendWrapper>
      <div>HotRecommend</div>
    </HotRecommendWrapper>
  );
};

export default memo(HotRecommend);

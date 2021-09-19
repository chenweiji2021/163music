import React, { memo } from "react";
import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

const Player = () => {
  return (
    <PlayerWrapper>
      <div className={"wrap-v2 content"}>
        <PlayerLeft></PlayerLeft>
        <PlayerRight></PlayerRight>
      </div>
    </PlayerWrapper>
  );
};

export default memo(Player);

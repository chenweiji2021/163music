import React, { memo } from "react";
import { SongCoverWrapper } from "./style";

import { getCount, getResizePic } from "../../utils/format-utils";

const SongCover = (props) => {
  const { info } = props;
  return (
    <SongCoverWrapper>
      <div className={"cover-top"}>
        <img src={getResizePic(info.picUrl, 140)} alt={info.name} />
        <div className={"sprite_cover cover"}>
          <div className={"sprite_cover info"}>
            <span>
              <i className={"sprite_icon erji"} />
              {getCount(info.playCount)}
            </span>
            <i className={"sprite_icon play"} />
          </div>
        </div>
      </div>
      <div className={"cover-bottom text-nowrap"}>{info.name}</div>
      <div className={"cover-source"}>{info.copywriter}</div>
    </SongCoverWrapper>
  );
};

export default memo(SongCover);

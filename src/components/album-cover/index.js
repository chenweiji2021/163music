import React, { memo } from "react";

import { getResizePic } from "../../utils/format-utils";

import { AlbumWrapper } from "./style";

const AlbumCover = (props) => {
  const { info, size = 100, width = 110, bgp = -845 } = props;
  return (
    <AlbumWrapper size={size + "px"} width={width + "px"} bgp={bgp + "px"}>
      <div className={"album-image"}>
        <img src={getResizePic(info.picUrl, size)} alt={info.name} />
        <a href={"/"} className={"image_cover cover"} />
      </div>
      <div className={"album-info"}>
        <div className={"name"}>{info.name}</div>
        <div className={"artist"}>{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
};

export default memo(AlbumCover);

import React, { memo } from "react";

import { getSongDetailAction } from "../../pages/player/store/actionCreator";

import { TopRankingWrapper } from "./style";
import { useDispatch } from "react-redux";

const TopRanking = (props) => {
  const { info } = props;

  const dispatch = useDispatch();

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <TopRankingWrapper>
      <div className={"header"}>
        <div className={"image"}>
          <img src={info.coverImgUrl} alt={info.name} />
          <a href="/" className={"image_cover"} />
        </div>
        <div className={"info"}>
          <h3 className={"title"}>{info.name}</h3>
          <a href="/" className={"sprite_02 btn play"} />
          <a href="/" className={"sprite_02 btn favor"} />
        </div>
      </div>
      <div className={"list"}>
        {info.tracks?.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className={"list-item"}>
              <span className={"rank"}>{index + 1}</span>
              <div className={"info"}>
                <span className={"name text-nowrap"}>{item.name}</span>
                <div className={"operate"}>
                  <button
                    className={"sprite_02 btn play"}
                    onClick={() => playMusic(item)}
                  />
                  <button className={"sprite_icon2 btn addTo"} />
                  <button className={"sprite_02 btn favor"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={"footer"}>
        <a href="/">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
};

export default memo(TopRanking);

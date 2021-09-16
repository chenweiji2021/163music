import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getSettleSingerAction } from "../../store/actionCreator";

import { SettleSingerWrapper } from "./style";

const SettleSinger = () => {
  const settleSingerList = useSelector(
    (state) => state.recommend.settleSingerList,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSettleSingerAction(5));
  }, [dispatch]);

  return (
    <SettleSingerWrapper>
      <div className={"singer-list"}>
        {settleSingerList.map((item) => {
          return (
            <div key={item.id} className={"item"}>
              <img src={item.img1v1Url} alt="" />
              <div className={"info"}>
                <div className={"title"}>{item.name}</div>
                <div className={"job"}>流行歌手</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={"apply-for"}>
        <a href="/">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  );
};

export default memo(SettleSinger);

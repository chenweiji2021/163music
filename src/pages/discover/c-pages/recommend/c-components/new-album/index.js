import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreator";

import { Carousel } from "antd";
import { AlbumWrapper } from "./style";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import AlbumCover from "@/components/album-cover";

const NewAlbum = () => {
  const newAlbumList = useSelector(
    (state) => state.recommend.newAlbumList,
    shallowEqual
  );
  const dispatch = useDispatch();
  const carouselRef = useRef();

  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title={"新碟上架"} />
      <div className={"content"}>
        <div
          className={"sprite_02 arrow arrow-left"}
          onClick={() => carouselRef.current.prev()}
        />
        <div className={"album"}>
          <Carousel autoplay dots={false} ref={carouselRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className={"page"}>
                  {newAlbumList.slice(item * 5, (item + 1) * 5).map((obj) => {
                    return (
                      <AlbumCover
                        key={obj.id}
                        info={obj}
                        size={100}
                        width={118}
                        bgp={-570}
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className={"sprite_02 arrow arrow-right"}
          onClick={() => carouselRef.current.next()}
        />
      </div>
    </AlbumWrapper>
  );
};

export default memo(NewAlbum);

import React, { memo, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Carousel } from "antd";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
import { getTopBannerAction } from "../../store/actionCreator";

const TopBanner = () => {
  const bannerList = useSelector(
    (state) => state.recommend.bannerList,
    shallowEqual
  );
  const dispatch = useDispatch();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, []);
  // console.log("bannerList =>", bannerList);

  const carouselChange = (from, to) => {
    setCurrentIndex(to);
  };
  const bgImage = bannerList[currentIndex]?.imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className={"wrap-v2 banner"}>
        <BannerLeft>
          <Carousel
            effect={"fade"}
            autoplay
            ref={carouselRef}
            beforeChange={carouselChange}
          >
            {bannerList.map((item) => {
              return (
                <div className={"banner-item"} key={item.imageUrl}>
                  <img
                    className={"image"}
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button
            className={"btn left"}
            onClick={() => carouselRef.current.prev()}
          />
          <button
            className={"btn right"}
            onClick={() => carouselRef.current.next()}
          />
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(TopBanner);

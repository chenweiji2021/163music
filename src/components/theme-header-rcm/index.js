import React, { memo } from "react";
import propTypes from "prop-types";

import { HeaderWrapper } from "./style";

const ThemeHeaderRCM = (props) => {
  const { title, keywords } = props;

  return (
    <HeaderWrapper className={"sprite_02"}>
      <div className={"left"}>
        <h3 className={"title"}>{title}</h3>
        <div className={"keyword"}>
          {keywords.map((item) => {
            return (
              <div key={item} className={"item"}>
                <a href="/">{item}</a>
                <span className={"divider"}>|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={"right"}>
        <a href="/">更多</a>
        <i className={"sprite_02 icon"} />
      </div>
    </HeaderWrapper>
  );
};

ThemeHeaderRCM.propTypes = {
  title: propTypes.string.isRequired,
  keywords: propTypes.array,
};
ThemeHeaderRCM.defaultProps = {
  keywords: [],
};

export default memo(ThemeHeaderRCM);

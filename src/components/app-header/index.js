import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "../../common/local-data";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const AppHeader = () => {
  return (
    <HeaderWrapper>
      <div className={"wrap-v1 content"}>
        <HeaderLeft>
          <a href="/" className={"sprite_01 logo"}>
            网易云音乐
          </a>
          <div className={"select-list"}>
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className={"select-item"}>
                  {index < 3 ? (
                    <NavLink to={item.link}>
                      {item.title}
                      <i className={"sprite_01 icon"} />
                    </NavLink>
                  ) : (
                    <a href={item.link} target={"_blank"} rel={"noreferrer"}>
                      {item.title}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className={"search"}
            prefix={<SearchOutlined />}
            placeholder={"音乐/视频/电台/用户"}
          />
          <div className={"center"}>创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className={"divider"} />
    </HeaderWrapper>
  );
};

export default memo(AppHeader);

import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { DiscoverWrapper, TopMenu } from "./style";
import { discoverMenu } from "../../common/local-data";

const Discover = (props) => {
  const { route } = props;
  // console.log("route =>", route);

  return (
    <DiscoverWrapper>
      <div className={" top"}>
        <TopMenu className={"wrap-v1"}>
          {discoverMenu.map((item) => {
            return (
              <div className={"item"} key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {/* renderRoutes的第一个参数是一个数组,里面是一个个路由的配置对象 */}
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
};

export default memo(Discover);

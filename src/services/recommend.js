import request from "./axios";

export const getTopBanner = () => {
  return request({
    url: "/banner",
    method: "GET",
  });
};

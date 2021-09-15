import request from "./axios";

export const getTopBanner = () => {
  return request({
    url: "/banner",
    method: "GET",
  });
};

export function getHotRecommend(limit) {
  return request({
    url: "/personalized",
    method: "GET",
    params: { limit },
  });
}

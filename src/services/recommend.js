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

export function getNewAlbum(limit) {
  return request({
    url: "/album/newest",
    params: { limit },
  });
}

export function getTopRanking(idx) {
  return request({
    url: "/playlist/detail",
    params: { id: idx },
  });
}

export function getSettleSinger(limit) {
  return request({
    url: "/artist/list",
    params: { limit },
  });
}

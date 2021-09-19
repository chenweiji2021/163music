import request from "./axios";

export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: { ids },
  });
}

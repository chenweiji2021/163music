export function getCount(count) {
  if (count < 0) return;
  return Math.floor(count / 10000) + "万";
}

export function getResizePic(picUrl, size) {
  return `${picUrl}?param=${size}x${size}`;
}

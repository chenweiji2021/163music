// line => "[03:45.644]夏末秋凉里带一点温热有换季的颜色"

const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})]/;

export function parseLyric(lyricStr) {
  const lineArr = lyricStr.split("\n");
  const lyricList = [];
  for (let line of lineArr) {
    if (line) {
      const result = parseExp.exec(line);
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
      const time = time1 + time2 + time3;
      const content = line.replace(parseExp, "").trim();
      const lyricObj = { time, content };
      lyricList.push(lyricObj);
    }
  }
  return lyricList;
}

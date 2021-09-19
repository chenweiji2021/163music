import React, { memo, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  changeNextMusicAction,
  changeSequenceAction,
  getSongDetailAction,
  changeCurrentLyricIndexAction,
} from "../store/actionCreator";
import { formatDate, getPlayUrl } from "../../../utils/format-utils";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { Slider, message } from "antd";
import { NavLink } from "react-router-dom";

const AppPlayerBar = () => {
  // state and props
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClickSlider, setIsClickSlider] = useState(false);

  // redux hooks
  const { currentSong, playList, lyricList, currentLyricIndex } = useSelector(
    (state) => state.player,
    shallowEqual
  );
  const dispatch = useDispatch();

  // 获取audio该DOM元素
  const audioRef = useRef();
  // 设置默认歌曲
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);
  // 切歌时自动播放
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [currentSong]);

  // 播放与暂停
  const playMusic = () => {
    setIsPlaying(!isPlaying);
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            setIsPlaying(false);
            message.error("暂无版权,播放失败");
          });
  };

  // 进度条相关逻辑
  // Slider组件的value属性,控制着进度条UI的变化
  // audio组件的currentTime属性,控制着实际的播放进度
  const progressNum = (currentTime / currentSong.dt) * 100;
  const sliderChange = (value) => {
    // value是0-100内的整数,代表用户点击处的进度数
    // currentTime的单位是毫秒,通过sliderChange传入的value来改变自己的值
    // currentSong.dt的单位是毫秒,代表歌曲的总时长
    setIsClickSlider((isClickSlider) => !isClickSlider);
    setCurrentTime((value / 100) * currentSong.dt);
  };
  useEffect(() => {
    // audioRef.current.currentTime的单位是秒,控制着audio组件的播放进度
    audioRef.current.currentTime = currentTime / 1000;
  }, [isClickSlider]);

  // 播放模式相关逻辑
  const sequence = useSelector((state) => state.player.sequence);
  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
    switch (currentSequence) {
      case 0:
        message.success("循环播放");
        break;
      case 1:
        message.success("随机播放");
        break;
      case 2:
        message.success("单曲循环");
        break;
      default:
        break;
    }
  };
  const playNextMusic = (tag) => {
    if (playList.length === 1) {
      message.warning("请添加歌曲到播放列表");
    }
    dispatch(changeNextMusicAction(tag));
  };
  const handleEnded = () => {
    if (sequence === 2 || playList.length === 1) {
      //  单曲循环或列表只有一首歌时
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeNextMusicAction(1));
    }
  };

  const handleTimeUpdate = (e) => {
    // 实时更新currentTime的值
    setCurrentTime(e.target.currentTime * 1000);
    // 歌词相关逻辑
    let i = 0;
    for (; i < lyricList.length; i++) {
      if (e.target.currentTime * 1000 < lyricList[i].time) {
        break;
      }
    }
    if (i - 1 !== currentLyricIndex) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
      message.open({
        content: lyricList[i - 1]?.content,
        duration: 0,
        key: "lyric",
      });
      // console.log(lyricList[i - 1]?.content);
    }
  };

  return (
    <PlaybarWrapper className={"sprite_playbar"}>
      <div className={"wrap-v2 content"}>
        <Control isPlaying={isPlaying}>
          <button
            className={"sprite_playbar prev"}
            onClick={() => playNextMusic(-1)}
          />
          <button className={"sprite_playbar play"} onClick={playMusic} />
          <button
            className={"sprite_playbar next"}
            onClick={() => playNextMusic(1)}
          />
        </Control>
        <PlayInfo>
          <div>
            <NavLink to={"/discover/player"}>
              <img src={currentSong.al?.picUrl} alt="" className={"image"} />
            </NavLink>
          </div>
          <div className={"info"}>
            <div className={"song"}>
              <span className={"song-name"}>{currentSong.name}</span>
              <a href="/" className={"singer-name"}>
                {currentSong.ar?.[0].name}
              </a>
            </div>
            <div className={"progress"}>
              <Slider value={progressNum} onChange={sliderChange} />
              <div className={"time"}>
                <span className={"now-time"}>
                  {formatDate(currentTime, "mm:ss")}
                </span>
                <span className={"divider"}>/</span>
                <span className={"total-time"}>
                  {formatDate(currentSong.dt || 0, "mm:ss")}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className={"left"}>
            <button className={"sprite_playbar btn favor"} />
            <button className={"sprite_playbar btn share"} />
          </div>
          <div className={"right"}>
            <button className={"sprite_playbar btn volume"} />
            <button
              className={"sprite_playbar btn loop"}
              onClick={changeSequence}
            />
            <button className={"sprite_playbar btn playlist"} />
          </div>
        </Operator>
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
      </div>
    </PlaybarWrapper>
  );
};

export default memo(AppPlayerBar);

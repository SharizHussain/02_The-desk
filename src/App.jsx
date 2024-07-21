import React, { useEffect, useState } from 'react';
import mainImg from './assets/pic/photo-1510519138101-570d1dca3d66.png'
import tree from './assets/pic/treeToMove.png'
import clock from './assets/pic/desk-clk.png'
import mobileImg from './assets/pic/Deep-Purple-iPhone-14-Stock-Pro-Wallpaper-iphone-11-pro.jpg'
import treeAudio from './assets/audio/bushmovement-6986.mp3'
import clockAudio from './assets/audio/telephone-ringwav-14674.mp3'
import lightAudio from './assets/audio/noisy-switch-166327.mp3'
import keyAudio from './assets/audio/quick-mechanical-keyboard-14391.mp3'
import mouseSound from './assets/audio/mouse-click-153941.mp3'
import kamlaSound from './assets/audio/indian-gungroos-ankle-bells-improv-18351_BBXG5oc7.mp3'
import './App.css';

const DeskComponent = () => {
  const [timer, setTimer] = useState(0);
  const [kamlaRun, setKamlaRun] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      document.querySelector('.hour_hand').style.transform = `rotate(${hour * 30}deg)`;
      document.querySelector('.minute_hand').style.transform = `rotate(${minutes * 6}deg)`;
      document.querySelector('.second_hand').style.transform = `rotate(${seconds * 6}deg)`;

      document.querySelector('.mobileTime>span:nth-child(1)').innerHTML = hour < 10 ? `0${hour}` : hour;
      document.querySelector('.mobileTime>span:nth-child(2)').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAlarm = () => {
    const alarmClock = document.querySelector('.alarmClock');
    if (timer === 0) {
      alarmClock.play();
      alarmClock.loop = true;
      setTimer(1);
    } else {
      alarmClock.pause();
      setTimer(0);
    }
  };

  const handleLight = () => {
    const lightSwitch = document.querySelector('.lightSwitch');
    document.querySelector('.mainImg').classList.toggle('lightOff');
    document.querySelector('.clockDiv').classList.toggle('lightOff');
    document.querySelector('.tree').classList.toggle('lightOff');
    lightSwitch.currentTime = 0;
    lightSwitch.play();
  };

  const handleKeyboard = () => {
    const typeAudio = document.querySelector('.typeAudio');
    typeAudio.play();
    if (typeAudio.play()) {
      setTimeout(() => {
        typeAudio.pause();
      }, 800);
    }
  };

  const handleMouse = () => {
    const mouseAudio = document.querySelector('.mouseAudio');
    mouseAudio.currentTime = 0;
    mouseAudio.play();
  };

  const handleMobile = () => {
    const mobile = document.querySelector('.mobile');
    mobile.classList.add('mobileToggle');
  };

  const handleMobileAnimationEnd = () => {
    const mobile = document.querySelector('.mobile');
    mobile.classList.remove('mobileToggle');
  };

  const handleKamla = () => {
    if (!kamlaRun) {
      document.querySelector('.mainImg').classList.add('kamla');
      document.querySelector('.tree').classList.add('kamla');
      document.querySelector('.clockDiv').classList.add('kamla');
      document.querySelector('.sound').play();
      document.querySelector('.sound').loop = false;
      setKamlaRun(true);
    }
  };

  const handleTreeAnimation = () => {
    const treeToMove1 = document.querySelector('.treeImg1');
    const treeToMove2 = document.querySelector('.treeImg2');
    const treeSound = document.querySelector('.treeSound');

    treeToMove1.classList.add('tree1Animation');
    treeToMove2.classList.add('tree2Animation');

    treeSound.currentTime = 0;
    treeSound.play();

    treeToMove2.addEventListener('animationend', (e) => {
      e.target.classList.remove('tree2Animation');
      treeToMove1.classList.remove('tree1Animation');
    });
  };

  return (
    <div className="main">
      <img src={mainImg} alt="main" className="mainImg" />
      <div className="elements">

        {/* Tree */}
        <div className="tree">
          <img src={tree} alt="" className="treeImg1" onClick={handleTreeAnimation} />
          <img src={tree} alt="" className="treeImg2" onClick={handleTreeAnimation} />
          <audio src={treeAudio} className="treeSound"></audio>
        </div>

        {/* Clock */}
        <div className="clockDiv" onClick={handleAlarm}>
          <img src={clock} alt="desk-clock" className="clock" />
          <div className="hands hour_hand"></div>
          <div className="hands minute_hand"></div>
          <div className="hands second_hand"></div>
          <audio src={clockAudio} className="alarmClock"></audio>
        </div>

        {/* Light */}
        <div className="lightBtn" onClick={handleLight}></div>
        <audio src={lightAudio} className="lightSwitch"></audio>

        {/* Keyboard */}
        <div className="keyboard" onClick={handleKeyboard}></div>
        <audio src={keyAudio} className="typeAudio"></audio>

        {/* Mouse */}
        <div className="mouse" onClick={handleMouse}></div>
        <audio src={mouseSound} className="mouseAudio"></audio>

        {/* Mobile */}
        <div className="mobile" onClick={handleMobile} onAnimationEnd={handleMobileAnimationEnd}>
          <img src={mobileImg} alt="" className="mobileImg" />
          <div className="mobileTime">
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Computer */}
        <div className="computer" onClick={handleKamla}></div>
        <audio src={kamlaSound} className="sound"></audio>

      </div>
    </div>
  );
};

export default DeskComponent;

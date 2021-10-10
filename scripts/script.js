// <reference path="bosstimer.d.ts" />

// Enable "Add App" button for Alt1 Browser.
A1lib.identifyApp("appconfig.json");

// Load audio files
const audioFiles = {
  bd13s: new Audio("assets/13s_bd.mp3"),
  fairy22s: new Audio("assets/22s_fairy.mp3"),
  crystalMask: new Audio("assets/crystal_mask.mp3"),
  bd49s: new Audio("assets/49s_bd.mp3"),
  anticipate: new Audio("assets/anticipate.mp3"),
  sticky1m12s: new Audio("assets/1m12s_sticky.mp3"),
  bd1m25s: new Audio("assets/1m25s_bd.mp3"),
  goMid: new Audio("assets/go_mid.mp3"),
  mushroomsSwitch: new Audio("assets/mushrooms_switch.mp3"),
};

// Start timer for mushrooms switch
const onMushroomsSwitch = () => {
  setTimeout(() => {
    console.log("mushroomsSwitch");
    audioFiles.mushroomsSwitch.play();
    mushroomsSwitchTimer = setInterval(() => {
      console.log("mushroomsSwitch");
      audioFiles.mushroomsSwitch.play();
    }, 30000);
  }, 25000);
};

// Helper function to play audio after a delay
const playWithTimeout = (audio, seconds) => {
  setTimeout(() => {
    console.log(audio);
    audioFiles[audio].play();
  }, seconds * 1000);
};

// Start timers for all mechanics
const start = () => {
  playWithTimeout("bd13s", 8);
  playWithTimeout("fairy22s", 17);
  playWithTimeout("crystalMask", 25);
  playWithTimeout("bd49s", 44);
  playWithTimeout("anticipate", 55);
  playWithTimeout("sticky1m12s", 67);
  playWithTimeout("bd1m25s", 80);
  playWithTimeout("goMid", 134);
};

// Start delayed alerts once boss timer appears
const bossTimerReader = new BossTimer.default();

let bossTimerFound = false;

const bossTimer = setInterval(() => {
  const bossTimer = bossTimerReader.find();
  if (bossTimer) {
    if (!bossTimerFound) {
      bossTimerFound = true;
      start();
    }
  } else {
    if (bossTimerFound) {
      bossTimerFound = false;
    }
  }
}, 300);

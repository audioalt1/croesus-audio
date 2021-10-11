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

let alertMechanics = true;
let alertMushrooms = true;

const onMechanicsCBClick = (e) => (alertMechanics = e.checked);
const onMushroomsCBClick = (e) => (alertMushrooms = e.checked);

// Start timer for mushrooms switch
let mushroomsInterval;
let mushroomsTimer;
const onMushroomsSwitch = () => {
  if (typeof mushroomsTimer !== "undefined") {
    clearTimeout(mushroomsTimer);
  }
  mushroomsTimer = setTimeout(() => {
    console.log("mushroomsSwitch");
    bossTimerFound && alertMushrooms && audioFiles.mushroomsSwitch.play();
    if (typeof mushroomsInterval !== "undefined") {
      clearInterval(mushroomsInterval);
    }
    mushroomsInterval = setInterval(() => {
      console.log("mushroomsSwitch");
      bossTimerFound && alertMushrooms && audioFiles.mushroomsSwitch.play();
    }, 30000);
  }, 25000);
};

// Helper function to play audio after a delay
const playWithTimeout = (audio, seconds) =>
  setTimeout(() => {
    console.log(audio);
    bossTimerFound && alertMechanics && audioFiles[audio].play();
  }, seconds * 1000);

// Start timers for all mechanics
let mechanicsTimers = [];
const start = () => {
  mechanicsTimers = [
    playWithTimeout("bd13s", 8),
    playWithTimeout("fairy22s", 17),
    playWithTimeout("crystalMask", 25),
    playWithTimeout("bd49s", 44),
    playWithTimeout("anticipate", 55),
    playWithTimeout("sticky1m12s", 67),
    playWithTimeout("bd1m25s", 80),
    playWithTimeout("goMid", 134),
  ];
};

// Stop timers for all mechanics
const stop = () => {
  mechanicsTimers.map((timer) => clearTimeout(timer));
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
      stop();
    }
  }
}, 300);

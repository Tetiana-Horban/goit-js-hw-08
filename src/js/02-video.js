import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const currentTime = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', throttle(currentTimeInLocalStorage, 1000));

function currentTimeInLocalStorage(video) {
  localStorage.setItem(STORAGE_KEY, video.seconds);
}

player.setCurrentTime(currentTime);

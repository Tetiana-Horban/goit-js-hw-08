import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const currentTime = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
player.on('timeupdate', throttle(currentTimeInLocalStorage, 1000));

function currentTimeInLocalStorage(video) {
  localStorage.setItem(STORAGE_KEY, video.seconds);
}

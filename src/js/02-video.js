import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new VimeoPlayer('vimeo-player');

const throttledSaveTime = throttle(function (currentTime) {
  localStorage.setItem('videoPlayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  throttledSaveTime(currentTime);
});

document.addEventListener('DOMContentLoaded', function () {
  const savedTime = localStorage.getItem('videoPlayer-current-time');
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
});

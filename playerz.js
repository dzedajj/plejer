
    const audioPlayer1 = document.querySelector('.audio-player1');
    const audio1 = new Audio(
      'https://meetarli-website-assets.s3.amazonaws.com/self_care_snippet.mp3'
    );
    audio1.addEventListener(
      'loadeddata',
      () => {
        audioPlayer1.querySelector('.time1 .length1').textContent =
          getTimeCodeFromNum(audio1.duration);
        audio1.volume = 0.75;
      },
      false
    );
  
    //click on timeline to skip around
    const timeline1 = audioPlayer1.querySelector('.timeline1');
    timeline1.addEventListener(
      'click',
      (e) => {
        const timelineWidth1 = window.getComputedStyle(timeline1).width;
        const timeToSeek1 = (e.offsetX / parseInt(timelineWidth1)) * audio1.duration;
        audio1.currentTime = timeToSeek1;
      },
      false
    );
  
    //click volume slider to change volume
    const volumeSlider1 = audioPlayer1.querySelector('.controls1 .volume-slider1');
    volumeSlider1.addEventListener(
      'click',
      (e) => {
        const sliderWidth1 = window.getComputedStyle(volumeSlider1).width;
        const newVolume1 = e.offsetX / parseInt(sliderWidth1);
        audio1.volume = newVolume1;
        audioPlayer1.querySelector('.controls1 .volume-percentage1').style.width =
          newVolume1 * 100 + '%';
      },
      false
    );
    //check audio percentage and update time accordingly
    setInterval(() => {
      const progressBar1 = audioPlayer1.querySelector('.progress1');
      progressBar1.style.width = (audio1.currentTime / audio.duration) * 100 + '%';
      audioPlayer1.querySelector('.time1 .current1').textContent =
        getTimeCodeFromNum(audio1.currentTime);
    }, 500);
  
    //toggle between playing and pausing on button click
    const playBtn1 = audioPlayer1.querySelector('.controls1 .toggle-play1');
    playBtn1.addEventListener(
      'click',
      () => {
        if (audio.paused) {
          playBtn1.classList.remove('play1');
          playBtn1.classList.add('pause1');
          audio.play();
        } else {
          playBtn1.classList.remove('pause1');
          playBtn1.classList.add('play1');
          audio1.pause();
        }
      },
      false
    );
    audioPlayer1.querySelector('.volume-button1').addEventListener('click', () => {
      const volumeEl1 = audioPlayer1.querySelector('.volume-container1 .volume1');
      audio1.muted = !audio1.muted;
      if (audio1.muted) {
        volumeEl1.classList.remove('icono-volumeMedium1');
        volumeEl1.classList.add('icono-volumeMute1');
      } else {
        volumeEl.classList.add('icono-volumeMedium1');
        volumeEl.classList.remove('icono-volumeMute1');
      }
    });
    audio1.addEventListener('ended', () => {
      mixpanel.track('audio-finished');
    });
 

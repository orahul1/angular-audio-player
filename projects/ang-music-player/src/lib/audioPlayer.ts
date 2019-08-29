import { ElementRef, ViewChild } from '@angular/core'



export class AudioPlyerOptions {
  totalAudioLength;
  currentAudioTime = 0;
  isAudioLoaded: boolean = false;
  isAudioPlaying: boolean;
  isRepeat: boolean = false;

  //Access audio player dom
  @ViewChild('audioPlayer', { static: true }) audioPlayer: ElementRef;


  //get audio player events
  options(): void {
    //emit event when playing audio 
    this.audioPlayer.nativeElement.addEventListener('playing', () => {
    });

       //emit when intial loading of audio
    this.audioPlayer.nativeElement.addEventListener('loadeddata', () => {
      this.isAudioLoaded = true;
      this.getAudioLength();
    });

       //emit time on playing audio
    this.audioPlayer.nativeElement.addEventListener('timeupdate', () => {
      //get current audio time
      this.currentAudioTime = Math.floor(this.audioPlayer.nativeElement.currentTime);
      //pausing audio when audio finish + check repeat is not true if true enable repeat.
      if (this.currentAudioTime == this.totalAudioLength && this.isRepeat == false) {
        this.audioPlayer.nativeElement.load();
        this.isAudioPlaying = false;
      }
    });
  }


  play() {
    //toggle play-pause button
    this.isAudioPlaying = true;
    //play when user click play button
    this.audioPlayer.nativeElement.play();
  }

  pause() {
    //toggle play-pause button
    this.isAudioPlaying = false;
    //pause when user click pause button
    this.audioPlayer.nativeElement.pause();
  }

  getAudioLength() {
    this.totalAudioLength = Math.floor(this.audioPlayer.nativeElement.duration);
  }

}
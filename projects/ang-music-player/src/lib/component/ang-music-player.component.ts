import { Component, OnInit, Output, Input } from '@angular/core';
import { AudioPlyerOptions } from '../audioPlayer';

@Component({
  selector: 'ang-music-player',
  templateUrl: './ang-music-player.component.html',
  styleUrls: ['./ang-music-player.component.scss'],
  inputs: ['width', 'height', 'backgroundColor', 'audioTimeColor', 'audioTitleColor', 'volumeSliderColor', 'timeSliderColor', 'volumeControlSliderHandleColor']
})
export class AngMusicPlayerComponent extends AudioPlyerOptions implements OnInit {
  @Input() audioList = [];
  @Input() next = true;
  @Input() previous = true;
  @Input() shuffle = true;
  @Input() repeat = true;
  @Input() scrollTitle = true;

  selectedAudio;
  currentAudioIndex = 0;
  repeatActive = false;
  isError = false;
  volumeBeforeMute;

  constructor() {
    super();
  }

  ngOnInit() {
    this.options();
    this.initiateAudioPlayer();
    //check audio is ended for next song
    this.isAudioEnded.subscribe(data => {
      if(!this.isRepeat && this.audioList.length > 0){
        this.nextAudio();
      }
    })
  }

  nextAudio() {   
    if (this.audioList.length - 1 != this.currentAudioIndex) {
      this.currentAudioIndex += 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();
      if(this.isAudioPlaying){
        this.play();
      }
    }
  }

  previousAudio() {
    if (this.currentAudioIndex != 0) {
      this.currentAudioIndex -= 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();
      if(this.isAudioPlaying){
        this.play();
      }
    }
  }

  seekAudio(seekAudioValue) {
    if (this.audioVolume != 0) {
      this.isMute = false;
    }
    this.audioPlayer.nativeElement.currentTime = seekAudioValue.target.value;
  }

  repeatAudio() {
    this.isRepeat = !this.isRepeat;
    this.repeatActive = !this.repeatActive;
    this.audioPlayer.nativeElement.loop = this.isRepeat;
  }

  volumeChange(volume) {  
    this.audioPlayer.nativeElement.volume = volume.target.value / 100;
  }

  muteAudio() {
    if (this.isMute) {
      this.audioPlayer.nativeElement.volume = 0.5;
      this.isMute = false;
    } else {
      this.audioPlayer.nativeElement.volume = 0;
      this.isMute = true;
    }
  }

  initiateAudioPlayer() {
    if (this.audioList.length <= 0) {
      this.isError = true;
    } else {
      this.selectedAudio = this.audioList[this.currentAudioIndex];
    }
  }
}

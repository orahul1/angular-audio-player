import { Component, OnInit, Output, Input } from '@angular/core';
import { AudioPlyerOptions } from '../audioPlayer';

@Component({
  selector: 'ang-music-player',
  templateUrl: './ang-music-player.component.html',
  styleUrls: ['./ang-music-player.component.scss'],
  inputs: ['width', 'height', 'backgroundColor']
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

  constructor() {
    super();
  }

  ngOnInit() {
    this.options();
    this.initiateAudioPlayer();    
  }

  nextAudio() {
    if (this.audioList.length - 1 != this.currentAudioIndex) {
      this.currentAudioIndex += 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();
    }
  }

  previousAudio() {
    if (this.currentAudioIndex != 0 ) {
      this.currentAudioIndex -= 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();
    }
  }

  seekAudio(seekAudioValue){
    this.audioPlayer.nativeElement.currentTime = seekAudioValue.target.value;
  }

  repeatAudio(){
    this.isRepeat = !this.isRepeat;
    this.audioPlayer.nativeElement.loop = this.isRepeat;    
  }

  initiateAudioPlayer() {
    this.selectedAudio = this.audioList[this.currentAudioIndex];    
  }

}

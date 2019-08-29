import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  audioList = [{
    url: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3',
    title: 'Thunder - Imagine Dragons',
  }, {
    url: 'https://sample-videos.com/audio/mp3/crowd-cheering.mp3',
    title: 'Kids - One Republic'
  },
  {
    url: 'https://sample-videos.com/audio/mp3/crowd-cheering.mp3',
    title: 'Star ship - Niki Minaj'
  }]
}

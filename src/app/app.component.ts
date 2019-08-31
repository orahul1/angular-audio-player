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
    cover: 'https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg'
  }, {
    url: 'https://sample-videos.com/audio/mp3/crowd-cheering.mp3',
    title: 'Kids - One Republic',
    cover: 'https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg'
  },
  {
    url: 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
    title: 'Star ship - Niki Minaj',
    cover: 'https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg'
  }]

  play(){
    console.log('play');
    
  }
}


# Angular Music / Audio Player

Angular Music/Audio Player component for web applications. Easy and HIGHLY customisable.

![alt text](https://i.ibb.co/Y7c9HZR/music.jpg)


## Getting Started

### Installation


- Install the package :

`npm install ang-music-player --save`

  

- Once installed import `AngMusicPlayerModule` from the installed package into your module as follows:

  
  

### Usage

Import `AngMusicPlayerModule` into `NgModule` in `app.module.ts`.

```js
import { AngMusicPlayerModule } from  'ang-music-player';

import { CommonModule } from  '@angular/common';

@NgModule({
// ...
imports: [

AngMusicPlayerModule,

CommonModule
  ]
// ...
})

```
Add the following component tag in you template (no properties)

```html
<ang-music-player [audioList] = audioList></ang-music-player>
``` 

audioList is an array of objects

```
  audioList = [{
    url: 'https://sample-videos.com/audio/mp3/crowd-cheering.mp3',
    title: 'Sample Audio 1',
    cover: 'https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg'
  }, {
    url: 'https://sample-videos.com/audio/mp3/crowd-cheering.mp3',
    title: 'Sample Audio 2',
    cover: 'https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg'
  },
  {
    url: 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
    title: 'Sample Audio 3',
    cover: 'https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg'
  }]
```

## Properties

The following list of properties are supported by the component.

| Property         |Type    | Description            | Default Value |
|:--- |:--- |:--- |:--- |
| width | String | Width of the audio player | 500px |
| height | String | Height of the audio players | true |
| backgroundColor | String | Background color of the audio player | #000000 |
| audioTimeColor | String | Audio time color  | rgb(76, 130, 175) |
| audioTitleColor | String | Audio title color | rgb(76, 130, 175) |
| timeSliderColor | String | Audio time slider color  | #fffff |
| volumeSliderColor | String | Volume slider color  | #fffff |
| playButtonColor | String | Color of play button |  rgb(76, 130, 175) |
| pauseButtonColor | String | Color of pause button   |  rgb(76, 130, 175) |
| nextButtonColor | String | Color of next button |  rgb(76, 130, 175) |
| previousButtonColor | String | Color of  previous button |  rgb(76, 130, 175) |
| repeatButtonColor | String | Color of  repeat button |  rgb(76, 130, 175) |
| activeRepeatButtonColor | String | Color of active repeat button |  green |
| volumeButtonColor | String | Color of  volume button |  rgb(76, 130, 175) |
| muteButtonColor | String | Color of mute button | rgb(76, 130, 175) |
| playEvent | Event | Play button click event |  |
| pauseEvent | Event | Pause button click event  |  |
| nextEvent | Event | Next button click event  |  |
| previousEvent | Event | Previous button click event | |
| repeatEvent | Event | Repeat button click event | |
| seekEvent | Event | Seek Audio event |  |

  

## License

MIT License.
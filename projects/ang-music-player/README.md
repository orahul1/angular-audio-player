# Angular Music / Audio Player

Angular Music/Audio Player component for web applications. Easy and HIGHLY customisable.
[Stackblitz example](https://stackblitz.com/edit/angular-audio-player-demo?file=src/app/app.component.ts)

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
  audioList = [
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Smaple 1",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      title: "Sample 2",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
      title: "Sample 3",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    }
  ];
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


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## TODO
### Shuffle option
### audio list option

  

## License

MIT License.

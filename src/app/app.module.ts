import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngMusicPlayerModule } from '../../projects/ang-music-player/src/lib/ang-music-player.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngMusicPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

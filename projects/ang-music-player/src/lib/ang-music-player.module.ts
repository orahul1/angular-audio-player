import { NgModule } from '@angular/core';
import { AngMusicPlayerComponent } from './component/ang-music-player.component';
import { CommonModule } from '@angular/common';
import { TimeConversionPipe } from './pipes/time-conversion.pipe';



@NgModule({
  declarations: [AngMusicPlayerComponent, TimeConversionPipe],
  imports: [
    CommonModule
  ],
  exports: [AngMusicPlayerComponent]
})
export class AngMusicPlayerModule { }

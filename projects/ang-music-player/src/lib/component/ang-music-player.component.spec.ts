import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMusicPlayerComponent } from './ang-music-player.component';

describe('AngMusicPlayerComponent', () => {
  let component: AngMusicPlayerComponent;
  let fixture: ComponentFixture<AngMusicPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngMusicPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMusicPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

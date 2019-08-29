import { TestBed } from '@angular/core/testing';

import { AngMusicPlayerService } from './ang-music-player.service';

describe('AngMusicPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngMusicPlayerService = TestBed.get(AngMusicPlayerService);
    expect(service).toBeTruthy();
  });
});

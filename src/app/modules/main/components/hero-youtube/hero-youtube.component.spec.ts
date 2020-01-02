import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroYoutubeComponent } from './hero-youtube.component';

describe('HeroYoutubeComponent', () => {
  let component: HeroYoutubeComponent;
  let fixture: ComponentFixture<HeroYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

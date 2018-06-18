import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifEngineComponent } from './gif-engine.component';

describe('GifEngineComponent', () => {
  let component: GifEngineComponent;
  let fixture: ComponentFixture<GifEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

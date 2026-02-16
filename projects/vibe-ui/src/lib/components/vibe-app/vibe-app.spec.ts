import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VibeApp } from './vibe-app';

describe('VibeApp', () => {
  let component: VibeApp;
  let fixture: ComponentFixture<VibeApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VibeApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VibeApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

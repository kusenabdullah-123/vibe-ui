import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileItem } from './profile-item';

describe('ProfileItem', () => {
  let component: ProfileItem;
  let fixture: ComponentFixture<ProfileItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

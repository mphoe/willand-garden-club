import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeClubComponent } from './coffee-club.component';

describe('CoffeeClubComponent', () => {
  let component: CoffeeClubComponent;
  let fixture: ComponentFixture<CoffeeClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

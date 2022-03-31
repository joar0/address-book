import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseBokComponent } from './adresse-bok.component';

describe('AdresseBokComponent', () => {
  let component: AdresseBokComponent;
  let fixture: ComponentFixture<AdresseBokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdresseBokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseBokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

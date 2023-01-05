import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaComponent } from './ropa.component';

describe('RopaComponent', () => {
  let component: RopaComponent;
  let fixture: ComponentFixture<RopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

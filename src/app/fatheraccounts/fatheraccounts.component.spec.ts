import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatheraccountsComponent } from './fatheraccounts.component';

describe('FatheraccountsComponent', () => {
  let component: FatheraccountsComponent;
  let fixture: ComponentFixture<FatheraccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatheraccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatheraccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

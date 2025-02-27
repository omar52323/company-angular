import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRequestComponent } from './order-request.component';

describe('OrderRequestComponent', () => {
  let component: OrderRequestComponent;
  let fixture: ComponentFixture<OrderRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

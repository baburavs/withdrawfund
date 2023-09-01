import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidrawfundComponent } from './widrawfund.component';

describe('WidrawfundComponent', () => {
  let component: WidrawfundComponent;
  let fixture: ComponentFixture<WidrawfundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidrawfundComponent]
    });
    fixture = TestBed.createComponent(WidrawfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

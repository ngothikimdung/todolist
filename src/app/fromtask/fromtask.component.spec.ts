import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromtaskComponent } from './fromtask.component';

describe('FromtaskComponent', () => {
  let component: FromtaskComponent;
  let fixture: ComponentFixture<FromtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

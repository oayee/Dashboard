import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPopoverComponent } from './edit-popover.component';

describe('EditPopoverComponent', () => {
  let component: EditPopoverComponent;
  let fixture: ComponentFixture<EditPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

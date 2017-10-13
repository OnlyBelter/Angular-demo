import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterParentComponent } from './event-emitter-parent.component';

describe('EventEmitterParentComponent', () => {
  let component: EventEmitterParentComponent;
  let fixture: ComponentFixture<EventEmitterParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmitterParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

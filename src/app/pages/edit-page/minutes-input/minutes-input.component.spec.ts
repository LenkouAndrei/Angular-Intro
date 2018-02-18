import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesInputComponent } from './minutes-input.component';

describe('MinutesInputComponent', () => {
  let component: MinutesInputComponent;
  let fixture: ComponentFixture<MinutesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinutesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

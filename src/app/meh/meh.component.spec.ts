import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MehComponent } from './meh.component';

describe('MehComponent', () => {
  let component: MehComponent;
  let fixture: ComponentFixture<MehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeeeeeeLabComponentComponent } from './weeeeeee-lab-component.component';

describe('WeeeeeeeLabComponentComponent', () => {
  let component: WeeeeeeeLabComponentComponent;
  let fixture: ComponentFixture<WeeeeeeeLabComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeeeeeeLabComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeeeeeeLabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

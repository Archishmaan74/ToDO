import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittasksComponent } from './edittasks.component';

describe('EdittasksComponent', () => {
  let component: EdittasksComponent;
  let fixture: ComponentFixture<EdittasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdittasksComponent]
    });
    fixture = TestBed.createComponent(EdittasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

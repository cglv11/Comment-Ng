import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCommentsComponent } from './add-edit-comments.component';

describe('AddEditCommentsComponent', () => {
  let component: AddEditCommentsComponent;
  let fixture: ComponentFixture<AddEditCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditCommentsComponent]
    });
    fixture = TestBed.createComponent(AddEditCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

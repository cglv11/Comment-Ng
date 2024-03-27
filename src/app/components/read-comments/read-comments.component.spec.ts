import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCommentsComponent } from './read-comments.component';

describe('ReadCommentsComponent', () => {
  let component: ReadCommentsComponent;
  let fixture: ComponentFixture<ReadCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadCommentsComponent]
    });
    fixture = TestBed.createComponent(ReadCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

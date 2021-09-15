import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPaginationComponent } from './contact-pagination.component';

describe('ContactPaginationComponent', () => {
  let component: ContactPaginationComponent;
  let fixture: ComponentFixture<ContactPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

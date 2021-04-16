import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypemeComponent } from './typeme.component';

describe('TypemeComponent', () => {
  let component: TypemeComponent;
  let fixture: ComponentFixture<TypemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypemeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypemeComponent } from './item-typeme.component';

describe('ItemTypemeComponent', () => {
  let component: ItemTypemeComponent;
  let fixture: ComponentFixture<ItemTypemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemTypemeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

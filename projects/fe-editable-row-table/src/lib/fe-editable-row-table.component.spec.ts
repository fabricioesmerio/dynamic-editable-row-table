import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeEditableRowTableComponent } from './fe-editable-row-table.component';

describe('FeEditableRowTableComponent', () => {
  let component: FeEditableRowTableComponent;
  let fixture: ComponentFixture<FeEditableRowTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeEditableRowTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeEditableRowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriComponent } from './curri.component';

describe('CurriComponent', () => {
  let component: CurriComponent;
  let fixture: ComponentFixture<CurriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

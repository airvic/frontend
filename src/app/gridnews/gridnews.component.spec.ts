import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridnewsComponent } from './gridnews.component';

describe('GridnewsComponent', () => {
  let component: GridnewsComponent;
  let fixture: ComponentFixture<GridnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

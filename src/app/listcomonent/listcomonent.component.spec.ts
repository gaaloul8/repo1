import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomonentComponent } from './listcomonent.component';

describe('ListcomonentComponent', () => {
  let component: ListcomonentComponent;
  let fixture: ComponentFixture<ListcomonentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcomonentComponent]
    });
    fixture = TestBed.createComponent(ListcomonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

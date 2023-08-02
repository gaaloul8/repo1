import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarcompnentComponent } from './toolbarcompnent.component';

describe('ToolbarcompnentComponent', () => {
  let component: ToolbarcompnentComponent;
  let fixture: ComponentFixture<ToolbarcompnentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarcompnentComponent]
    });
    fixture = TestBed.createComponent(ToolbarcompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

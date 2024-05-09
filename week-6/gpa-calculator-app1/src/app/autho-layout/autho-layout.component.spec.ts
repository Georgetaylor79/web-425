import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoLayoutComponent } from './autho-layout.component';

describe('AuthoLayoutComponent', () => {
  let component: AuthoLayoutComponent;
  let fixture: ComponentFixture<AuthoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

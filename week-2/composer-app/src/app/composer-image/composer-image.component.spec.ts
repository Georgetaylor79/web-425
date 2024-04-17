import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerImageComponent } from './composer-image.component';

describe('ComposerImageComponent', () => {
  let component: ComposerImageComponent;
  let fixture: ComponentFixture<ComposerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

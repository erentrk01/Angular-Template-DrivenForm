import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangComponentComponent } from './lang-component.component';

describe('LangComponentComponent', () => {
  let component: LangComponentComponent;
  let fixture: ComponentFixture<LangComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

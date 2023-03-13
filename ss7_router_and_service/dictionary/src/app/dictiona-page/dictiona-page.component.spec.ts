import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaPageComponent } from './dictiona-page.component';

describe('DictionaPageComponent', () => {
  let component: DictionaPageComponent;
  let fixture: ComponentFixture<DictionaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

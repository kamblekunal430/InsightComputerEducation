import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkclComponent } from './mkcl.component';

describe('MkclComponent', () => {
  let component: MkclComponent;
  let fixture: ComponentFixture<MkclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

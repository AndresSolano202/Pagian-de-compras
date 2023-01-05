import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagcompraComponent } from './pagcompra.component';

describe('PagcompraComponent', () => {
  let component: PagcompraComponent;
  let fixture: ComponentFixture<PagcompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagcompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

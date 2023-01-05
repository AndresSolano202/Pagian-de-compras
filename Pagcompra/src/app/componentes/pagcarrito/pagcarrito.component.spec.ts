import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagcarritoComponent } from './pagcarrito.component';

describe('PagcarritoComponent', () => {
  let component: PagcarritoComponent;
  let fixture: ComponentFixture<PagcarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagcarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagcarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

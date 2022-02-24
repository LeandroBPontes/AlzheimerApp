import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadorComponent } from './cuidador.component';

describe('CuidadorComponent', () => {
  let component: CuidadorComponent;
  let fixture: ComponentFixture<CuidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuidadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCuidadorComponent } from './editar-cuidador.component';

describe('EditarCuidadorComponent', () => {
  let component: EditarCuidadorComponent;
  let fixture: ComponentFixture<EditarCuidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCuidadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

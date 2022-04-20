import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBaseComponent } from './editar-base.component';

describe('EditarBaseComponent', () => {
  let component: EditarBaseComponent;
  let fixture: ComponentFixture<EditarBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

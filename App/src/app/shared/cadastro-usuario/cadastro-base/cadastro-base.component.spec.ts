import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBaseComponent } from './cadastro-base.component';

describe('CadastroBaseComponent', () => {
  let component: CadastroBaseComponent;
  let fixture: ComponentFixture<CadastroBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

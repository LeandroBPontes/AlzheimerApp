import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCuidadorComponent } from './tela-cuidador.component';

describe('TelaCuidadorComponent', () => {
  let component: TelaCuidadorComponent;
  let fixture: ComponentFixture<TelaCuidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCuidadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

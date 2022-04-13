import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCuidadorModalComponent } from './tela-cuidador-modal.component';

describe('TelaCuidadorModalComponent', () => {
  let component: TelaCuidadorModalComponent;
  let fixture: ComponentFixture<TelaCuidadorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCuidadorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCuidadorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

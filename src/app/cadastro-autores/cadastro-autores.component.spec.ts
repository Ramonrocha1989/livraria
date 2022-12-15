import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAutoresComponent } from './cadastro-autores.component';

describe('CadastroAutoresComponent', () => {
  let component: CadastroAutoresComponent;
  let fixture: ComponentFixture<CadastroAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAutoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

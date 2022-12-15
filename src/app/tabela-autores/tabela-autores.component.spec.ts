import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAutoresComponent } from './tabela-autores.component';

describe('TabelaAutoresComponent', () => {
  let component: TabelaAutoresComponent;
  let fixture: ComponentFixture<TabelaAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaAutoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

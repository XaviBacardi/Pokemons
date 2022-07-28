import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPokemonsComponent } from './vista-pokemons.component';

describe('VistaPokemonsComponent', () => {
  let component: VistaPokemonsComponent;
  let fixture: ComponentFixture<VistaPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPokemonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

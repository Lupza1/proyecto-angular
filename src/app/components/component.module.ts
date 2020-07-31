import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Routes } from '@angular/router';

import { FormUserComponent } from './form-user/form-user.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FormUserComponent, CatalogoComponent, CarritoComponent, NoEncontradoComponent],
  exports: [
    FormUserComponent,
    CarritoComponent,
    CatalogoComponent,
  ],
})
export class ComponentModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule} from './components/component.module'
import { FormUserComponent } from './components/form-user/form-user.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: FormUserComponent },
  { path: 'cart', component: CarritoComponent },
  { path: 'main', component: CatalogoComponent},
  { path: '404', component: NoEncontradoComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
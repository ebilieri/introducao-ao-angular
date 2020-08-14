import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';


const routes: Routes = [
  {
    path:"",
    component: ListarClientesComponent
  },
  {
    path:"clientes",
    component: ListarClientesComponent
  },
  {
    path:"clientes/cadastrar",
    component: ClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

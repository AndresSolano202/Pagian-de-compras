import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PagcarritoComponent } from './componentes/pagcarrito/pagcarrito.component';
import { PagcompraComponent } from './componentes/pagcompra/pagcompra.component';
import { UsererrorComponent } from './componentes/usererror/usererror.component';

const routes: Routes = 
[
  {
    path: '' , component: LoginComponent
  },

  {
    path: 'error' , component: UsererrorComponent
  },

  {
    path: 'pagP' , component: PagcompraComponent
  },
  {
    path: 'pagC' , component: PagcarritoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

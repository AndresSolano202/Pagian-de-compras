import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsererrorComponent } from './componentes/usererror/usererror.component';
import { PagcompraComponent } from './componentes/pagcompra/pagcompra.component';
import { PagcarritoComponent } from './componentes/pagcarrito/pagcarrito.component';

const appRoutes:Routes=
[
  {
    path: 'login' , component: LoginComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsererrorComponent,
    PagcompraComponent,
    PagcarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

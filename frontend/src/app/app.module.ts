import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListarClientesComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        timeOut: 20000,
        positionClass: 'toast-top-right',
        closeButton: true
      }
    ), // ToastrModule added
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

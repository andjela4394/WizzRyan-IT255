import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { OnamaComponent } from './onama/onama.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiComponent } from './di/di.component';
import { FlightServiceService } from './flight-service.service';
import { FlightCrudComponent } from './flight-crud/flight-crud.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
{path: 'ponuda', component: PonudaComponent },
{path: 'preporuka', component: PreporukaComponent },
{path: 'onama', component: OnamaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    NavbarComponent,
    PonudaComponent,
    PreporukaComponent,
    OnamaComponent,
    DiComponent,
    FlightCrudComponent,
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlightServiceService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

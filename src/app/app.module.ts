import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { TutorialDetailsComponent } from './components/producto-details/producto-details.component';
import { TutorialsListComponent } from './components/producto-list/producto-list.component';
import { MovimientoListComponent } from './components/movimiento-list/movimiento-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductoComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    MovimientoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/producto-list/producto-list.component';
import { TutorialDetailsComponent } from './components/producto-details/producto-details.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { MovimientoListComponent } from './components/movimiento-list/movimiento-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddProductoComponent },
  { path: 'movimientos', component: MovimientoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

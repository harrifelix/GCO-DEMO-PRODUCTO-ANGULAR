import { Component, OnInit } from '@angular/core';
import { Movimiento } from 'src/app/models/movimiento.model';
import { Producto } from 'src/app/models/producto.model';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-movimiento-list',
  templateUrl: './movimiento-list.component.html',
  styleUrls: ['./movimiento-list.component.css'],
})
export class MovimientoListComponent {
  movimientos?: Movimiento[];
  currentMovimiento: Movimiento = {};
  currentIndex = -1;
  codigo = '';

  constructor(private movimientoService: MovimientoService) {}

  ngOnInit(): void {
    this.retrieveProductos();
  }

  retrieveProductos(): void {
    this.movimientoService.getAll().subscribe({
      next: (data) => {
        this.movimientos = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveProductos();
    this.currentMovimiento = {};
    this.currentIndex = -1;
  }

  setActiveProducto(movimiento: Producto, index: number): void {
    this.currentMovimiento = movimiento;
    this.currentIndex = index;
  }

}

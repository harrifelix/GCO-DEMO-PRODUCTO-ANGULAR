import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
})
export class TutorialsListComponent {
  productos?: Producto[];
  currentProducto: Producto = {};
  currentIndex = -1;
  codigo = '';
  criterioBusqueda='';
 
  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.retrieveProducto();
  }
     onSelectionChange(event: any) {
       const selectedValue = event.target.value;
     this.criterioBusqueda=selectedValue;
       
     }
  retrieveProducto(): void {
    this.productoService.getAll().subscribe({
      next: (data) => {
        this.productos = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveProducto();
    this.currentProducto = {};
    this.currentIndex = -1;
  }

  setActiveProducto(producto: Producto, index: number): void {
    this.currentProducto = producto;
    this.currentIndex = index;
  }


  search(): void {
    this.currentProducto = {};
    this.currentIndex = -1;
if(this.criterioBusqueda==='1'){
    this.productoService.findByCategoria(this.codigo).subscribe({
      next: (data) => {
        this.currentProducto = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }if(this.criterioBusqueda==='2'){
    this.productoService.findByNombre(this.codigo).subscribe({
      next: (data) => {
        this.currentProducto = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }if(this.criterioBusqueda==='3'){
    this.productoService.findByCodigo(this.codigo).subscribe({
      next: (data) => {
        this.currentProducto = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  }
}

import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService as ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-tutorial',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css'],
})
export class AddProductoComponent {
  producto: Producto = {
   nombre:"",
   descripcion:"",
    precio:"",
     stock:"",
      categoria:"",
       codigo:"",
        fechaCreacion :"",
  };
  submitted = false;

  constructor(private productoService: ProductoService) {}

  saveProducto(): void {
    const data = {
      nombre: this.producto.nombre,
      descripcion: this.producto.descripcion,
      precio:this.producto.precio,
      stock:this.producto.stock,
      categoria:this.producto.categoria,
      codigo:this.producto.codigo,
      fechaCreacion:this.producto.fechaCreacion
    };
    this.productoService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newProducto(): void {
    this.submitted = false;
    this.producto = {
     nombre:"",
   descripcion:"",
    precio:"",
     stock:"",
      categoria:"",
       codigo:"",
        fechaCreacion :"",
    };
  }
}

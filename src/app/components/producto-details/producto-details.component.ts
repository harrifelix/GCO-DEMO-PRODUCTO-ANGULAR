import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto-details',
  templateUrl: './producto-details.component.html',
  styleUrls: ['./producto-details.component.css'],
})
export class TutorialDetailsComponent {
  @Input() viewMode = false;

  @Input() currentProducto: Producto = {
    id:0,
   nombre:'',
   descripcion:'',
    precio:'',
     stock:'',
      categoria:'',
       codigo:'',
        fechaCreacion :''
  };

  message = '';

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProducto(this.route.snapshot.params['id']);
    }
  }

  getProducto(id: string): void {
    this.productoService.get(id).subscribe({
      next: (data) => {
        this.currentProducto = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateProducto(): void {
    this.message = '';

    this.productoService
      .update( this.currentProducto)
      .subscribe({
        next: (res) => {
          console.log(res);
           this.router.navigate(['/tutorials']);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteProducto(): void {
    this.productoService.delete(this.currentProducto.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tutorials']);
      },
      error: (e) => console.error(e)
    });
  }
}

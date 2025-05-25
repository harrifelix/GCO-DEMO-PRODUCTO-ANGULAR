import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { TutorialService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-tutorial',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css'],
})
export class AddTutorialComponent {
  tutorial: Producto = {
   nombre:"",
   descripcion:"",
    precio:"",
     stock:"",
      categoria:"",
       codigo:"",
        fechaCreacion :"",
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) {}

  saveTutorial(): void {
    const data = {
      nombre: this.tutorial.nombre,
      descripcion: this.tutorial.descripcion,
      precio:this.tutorial.precio,
      stock:this.tutorial.stock,
      categoria:this.tutorial.categoria,
      codigo:this.tutorial.codigo,
      fechaCreacion:this.tutorial.fechaCreacion
    };
   alert(data);
    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
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

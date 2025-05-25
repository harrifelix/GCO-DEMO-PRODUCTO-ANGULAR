import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto-details',
  templateUrl: './producto-details.component.html',
  styleUrls: ['./producto-details.component.css'],
})
export class TutorialDetailsComponent {
  @Input() viewMode = false;

  @Input() currentTutorial: Producto = {
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
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params['id']);
    }
  }

  getTutorial(id: string): void {
    alert('entro'+id)
    this.tutorialService.get(id).subscribe({
      next: (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.categoria,
      description: this.currentTutorial.codigo,
      published: status
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService
      .update( this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tutorials']);
      },
      error: (e) => console.error(e)
    });
  }
}

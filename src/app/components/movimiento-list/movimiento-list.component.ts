import { Component, OnInit } from '@angular/core';
import { Movimiento } from 'src/app/models/movimiento.model';
import { Producto } from 'src/app/models/producto.model';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { TutorialService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-movimiento-list',
  templateUrl: './movimiento-list.component.html',
  styleUrls: ['./movimiento-list.component.css'],
})
export class MovimientoListComponent {
  tutorials?: Movimiento[];
  currentTutorial: Movimiento = {};
  currentIndex = -1;
  codigo = '';

  constructor(private tutorialService: MovimientoService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Producto, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

}

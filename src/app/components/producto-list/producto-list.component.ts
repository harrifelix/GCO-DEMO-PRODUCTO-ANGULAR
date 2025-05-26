import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { TutorialService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
})
export class TutorialsListComponent {
  tutorials?: Producto[];
  currentTutorial: Producto = {};
  currentIndex = -1;
  codigo = '';
  criterioBusqueda='';
 
  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }
     onSelectionChange(event: any) {
       const selectedValue = event.target.value;
     this.criterioBusqueda=selectedValue;
       
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

  removeAllTutorials(): void {
    this.tutorialService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;
if(this.criterioBusqueda==='1'){
    this.tutorialService.findByCategoria(this.codigo).subscribe({
      next: (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }if(this.criterioBusqueda==='2'){
    this.tutorialService.findByNombre(this.codigo).subscribe({
      next: (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }if(this.criterioBusqueda==='3'){
    this.tutorialService.findByTitle(this.codigo).subscribe({
      next: (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  }
}

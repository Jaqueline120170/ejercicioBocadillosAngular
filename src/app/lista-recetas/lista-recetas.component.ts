import { Component, inject } from '@angular/core';
import { RecetasService } from '../servicios/recetas.service';
import { Receta } from '../modelos/receta';

@Component({
  selector: 'app-lista-recetas',
  standalone: true,
  imports: [],
  templateUrl: './lista-recetas.component.html',
  styleUrl: './lista-recetas.component.css'
})
export class ListaRecetasComponent {
  

  recetasSvc = inject(RecetasService);

  recetas: Receta[] = [];

  ngOnInit() {
    this.recetas = this.recetasSvc.readRecetas();
  }

}

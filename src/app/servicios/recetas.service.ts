import { Injectable } from '@angular/core';
import { Receta } from '../modelos/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private recetas: Receta[] = [];

  createReceta(recetas: Receta) {
    this.recetas.push(recetas);
  }

  readRecetas(): Receta[] {
    return this.recetas;
  }

  updateReceta(recetas: Receta) {
    // Aquí modificaremos el origen de datos
  }

  deleteReceta(idReceta: string) {
    // Eliminará el cliente idCliente
  }
}

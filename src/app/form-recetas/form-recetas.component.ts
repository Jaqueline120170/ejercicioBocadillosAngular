import { Component, inject } from '@angular/core';
import { RecetasService } from '../servicios/recetas.service';
import { Receta } from '../modelos/receta';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-recetas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-recetas.component.html',
  styleUrl: './form-recetas.component.css'
})
export class FormRecetasComponent {
  recetasSVC = inject(RecetasService);
  receta: Receta = {
    nombreReceta:'',
    ingredientes: '',
    id: '',
    preparacion: '',
  }
  addReceta() {
    console.log(this.receta);
    this.recetasSVC.createReceta(this.receta);
  }
}

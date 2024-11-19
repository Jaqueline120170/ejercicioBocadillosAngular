import { Routes } from '@angular/router';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { FormRecetasComponent } from './form-recetas/form-recetas.component';

export const routes: Routes = [
{path: 'nueva-receta', component: FormRecetasComponent},
{path: 'lista-recetas', component: ListaRecetasComponent}
];

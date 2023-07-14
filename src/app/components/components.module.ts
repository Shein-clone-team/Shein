import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { RopaComponent } from './ropa/ropa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    BuscadorComponent,
    RopaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    BuscadorComponent,
    RopaComponent
  ]
})
export class ComponentsModule { }

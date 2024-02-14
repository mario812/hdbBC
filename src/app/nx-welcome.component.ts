import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'miappnx-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     This is a starter component and can be deleted.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Delete this file and get started with your project!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     -->
    
    <div class="wrapper">
      <div class="contenedor">
    <div class="caja">
      <h2 class="titulo">Datos Personales</h2>
      <p class="dato">Nombre: <strong>Mario Cabrera</strong></p>
      <p class="dato">Correo electrónico: <strong>mlct_018&#64;hotmail.com</strong></p>
      <p class="dato">Repositorio Heavy Duty Bootcamp: <strong>github/mario812/hdbBC</strong></p>
    </div>
  </div>
        
       
    </div>
       
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}

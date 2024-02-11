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
    <style>
        html {
        -webkit-text-size-adjust: 100%;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        line-height: 1.5;
        tab-size: 4;
        scroll-behavior: smooth;
      }
      body {
        font-family: inherit;
        line-height: inherit;
        margin: 0;
      }

      .contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .caja {
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: 500px;
    background-color: #f7f7f7;
  }

  .titulo {
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
    text-decoration-color: blue;
  }

  .dato {
    font-size: 16px;
    margin-bottom: 5px;
  }
     
      .wrapper {
        width: 100%;
      }

    </style>
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

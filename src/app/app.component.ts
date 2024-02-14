import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'miappnx-root',
  template: `
  <header>
    <h1> Hola, soy yo</h1>
  </header>`
 
})
export class AppComponent {

}

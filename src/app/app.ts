import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Bem-vindo a All4Sec</h1>
    
    <router-outlet></router-outlet>
    `
})
export class App {
  protected readonly title = signal('parceria-digicert');
}

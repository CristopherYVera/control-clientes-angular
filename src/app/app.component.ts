import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CabeceroComponent } from "./components/cabecero/cabecero.component";
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceroComponent,PiePaginaComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'control-clientes';
}

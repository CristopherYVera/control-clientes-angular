import { Routes } from '@angular/router';
import { TableroComponent } from './components/tablero/tablero.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

export const routes: Routes = [
    {path: '', component:TableroComponent},
    {path: 'login', component:LoginComponent},
    {path: 'registrarse', component:RegistroComponent},
    {path: 'configuracion', component:ConfiguracionComponent},
    {path: 'cliente/editar/:id', component:EditarClienteComponent},
    {path: '**',component:NoEncontradoComponent},
];

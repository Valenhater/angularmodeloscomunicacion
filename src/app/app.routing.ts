import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { HomeComponent } from './components/home/home.component';
import { HijococheComponent } from './components/hijocoche/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ListaproductosComponent },
  { path: 'detalleproducto/:nombre/:imagen/:precio ', component: DetalleproductoComponent },
  { path: 'coches', component: PadrecochesComponent },
  { path: 'deportes', component: PadredeportesComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';

const routes: Routes = [
  // Route for the home page without language parameter
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // // Route for home page with optional language parameter
  { path: 'home', component: HomeComponent},
  { path: 'stock-details/:isin', component: StockDetailsComponent },
  // // Routes with optional language parameter
  // { path: ':language/proyectos', component: ArchiveComponent },
  { path: 'tradingrules', component: StockDetailsComponent },
  // Wildcard route
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

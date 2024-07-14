import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TradingRulesComponent } from './components/trading-rules/trading-rules.component';

const routes: Routes = [
  // Route for the home page without language parameter
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // Route for home page with optional language parameter
  { path: ':language', component: HomeComponent, pathMatch: 'full' },
  // Routes with optional language parameter
  { path: ':language/proyectos', component: ArchiveComponent },
  { path: ':language/tradingrules', component: TradingRulesComponent },
  // Wildcard route
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

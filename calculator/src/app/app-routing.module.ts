import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// page components
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  }, {
    path: 'homepage',
    component: HomepageComponent
  }, {
    path: 'calculator',
    component: CalculatorComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

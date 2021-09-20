import { GunboundCalculatorComponent } from './gunbound-calculator.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [ 
  { 
    path: '',
    component: GunboundCalculatorComponent 
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GunboundCalculatorRoutingModule {}
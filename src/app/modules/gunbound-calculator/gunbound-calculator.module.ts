
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GunboundCalculatorComponent } from './gunbound-calculator.component';

import { GunboundCalculatorRoutingModule } from './gunbound-calculator-routing.module';
import { SharedModule } from './../../../shared/shared.module';


@NgModule({
  declarations: [
    GunboundCalculatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GunboundCalculatorRoutingModule
  ]
})
export class GunboundCalculatorModule { }

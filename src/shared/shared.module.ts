import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileSelectorComponent } from './components/mobile-selector/mobile-selector.component';
import { MobileComponent } from './components/mobile/mobile.component';

const sharedComponents = [
  MobileComponent,
  MobileSelectorComponent
]

@NgModule({
  declarations: [
    ...sharedComponents,
    MobileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }

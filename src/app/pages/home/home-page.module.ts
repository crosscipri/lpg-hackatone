import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { HomeRoutingPageModule } from './home-routing-page.module';

/**
 * HomePageModule
 */
@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingPageModule]
})
export class HomePageModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiAccordionModule } from '@taiga-ui/kit';

import { SidebarComponent } from './sidebar.component';

/**
 * SidebarModule
 */
@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, TuiAccordionModule, TuiSidebarModule],
  exports: [SidebarComponent]
})
export class SidebarModule {}

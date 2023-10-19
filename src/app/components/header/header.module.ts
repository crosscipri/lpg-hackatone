import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TuiAppBarModule } from '@taiga-ui/addon-mobile';
import { TuiButtonModule, TuiLabelModule, TuiSvgModule } from '@taiga-ui/core';

import { HeaderComponent } from './header.component';
/**
 * HeaderModule
 */
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, TuiAppBarModule, TuiButtonModule, TuiSvgModule, TuiLabelModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}

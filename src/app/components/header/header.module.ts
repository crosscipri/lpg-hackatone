import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TuiSvgModule } from '@taiga-ui/core';

import { MTranslateModule } from '@mercadona/core/translate';

import { HeaderComponent } from './header.component';

/**
 * HeaderModule
 */
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MTranslateModule, TuiSvgModule, RouterModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}

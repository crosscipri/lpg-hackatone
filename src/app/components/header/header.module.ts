import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiTabsModule } from '@taiga-ui/kit';

import { MTranslateModule } from '@mercadona/core/translate';

import { HeaderComponent } from './header.component';

/**
 * HeaderModule
 */
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MTranslateModule, TuiSvgModule, RouterModule, TuiTabsModule, TuiButtonModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}

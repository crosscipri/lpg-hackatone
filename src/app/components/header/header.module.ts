import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SidebarModule } from '@components/sidebar/sidebar.module';
import { TuiAppBarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiLabelModule, TuiRootModule, TuiSvgModule } from '@taiga-ui/core';

import { MClickDirective } from '@mercadona/components/common';

import { HeaderComponent } from './header.component';
/**
 * HeaderModule
 */
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TuiAppBarModule,
    TuiRootModule,
    SidebarModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiActiveZoneModule,
    TuiLabelModule,
    MClickDirective
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}

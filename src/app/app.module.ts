import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from '@components/header/header.module';
import { APP_CONFIG } from '@constants';
import { environment } from '@environment';
import { TuiRootModule, TuiSvgModule } from '@taiga-ui/core';

import { MErrorHandlerModule } from '@mercadona/core-ui/error-handler';
import { MPageErrorModule } from '@mercadona/core-ui/page-error';
import { MPageNotFoundModule } from '@mercadona/core-ui/page-not-found';
import { MAuthModule } from '@mercadona/core/auth';
import { MLoggerModule } from '@mercadona/core/logger';
import { MPlatformModule } from '@mercadona/core/platform';
import { MTranslateModule } from '@mercadona/core/translate';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MErrorHandlerModule.forRoot(),
    MTranslateModule.forRoot(APP_CONFIG.language),
    MLoggerModule.forRoot({
      logLevel: environment.logLevel
    }),
    MPlatformModule.forRoot({
      appName: APP_CONFIG.appName,
      environment: environment.env
    }),
    MPageNotFoundModule,
    MPageErrorModule.forRoot(),
    TuiRootModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    TuiSvgModule,
    MAuthModule.forRoot({
      clientId: environment.configAuth.clientId,
      authority: environment.configAuth.authority,
      knownAuthorities: environment.configAuth.knownAuthorities,
      resource: environment.configAuth.resource,
      scope: environment.configAuth.scope,
      postLogoutRedirectUri: environment.configAuth.postLogoutRedirectUri,
      redirectUri: environment.configAuth.redirectUri,
      authOnAppStart: environment.configAuth.authOnAppStart,
      forceAuthentication: environment.configAuth.forceAuthentication
    })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

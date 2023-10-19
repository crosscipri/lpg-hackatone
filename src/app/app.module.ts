import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from '@components/header/header.module';
import { APP_CONFIG } from '@constants';
import { environment } from '@environment';
import { TUI_SANITIZER, TuiRootModule, tuiSvgOptionsProvider } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

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
    HeaderModule,
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
    // A workaround because StackBlitz does not support assets
    tuiSvgOptionsProvider({
      path: 'https://taiga-ui.dev/assets/taiga-ui/icons'
    }),
    /**
     * If you use unsafe icons or TuiEditor in your app
     *
     * Take a look at: https://github.com/taiga-family/ng-dompurify
     *
     * This library implements DOMPurify as Angular Sanitizer or Pipe.
     * It delegates sanitizing to DOMPurify and supports the same configuration.
     */
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

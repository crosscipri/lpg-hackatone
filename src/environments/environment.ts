import { MLoggerLevel } from '@mercadona/core/logger';
import { MPlatformEnvironment } from '@mercadona/core/platform';
import { MTelemetryConfig, MTraces } from '@mercadona/core/telemetry';
import { MEnviroment } from '@mercadona/core/utils/environment';

/**
 * Do not duplicate this file into environment.dev.ts, environment.itg.ts, ...
 * Define here ONLY localhost environment variables.
 */
/**
 * For dev,itg,pre,pro environments copy this content to the chart files
 * charts/env/values-<env>.yaml
 */
const localEnvironment = {
  production: false,
  logLevel: MLoggerLevel.TRACE,
  env: 'local' as MPlatformEnvironment,
  telemetryConfig: {
    url: 'https://otelcol-front.dev.gcp.mercadona.com/v1/traces',
    traces: MTraces.DEFAULT
  } as MTelemetryConfig,
  configAuth: {
    clientId: ' 159f86ac-a67b-44bd-b740-33543979c193',
    authority: 'https://fed.itgmercadona.com/adfs',
    knownAuthorities: ['https://fed.itgmercadona.com/adfs'],
    resource: 'api://mercadona/audience/services/app7hackathon/v1',
    scope: ['openid'],
    postLogoutRedirectUri: 'https://localhost:4200',
    redirectUri: 'https://localhost:4200',
    authOnAppStart: true
  }
};

const envInstance = new MEnviroment('yourAppName', localEnvironment);

export const environment = envInstance.environment;

import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser';
import { App } from './app';
import { appConfig } from './app.config';

const bootstrap = (context?: BootstrapContext) =>
  bootstrapApplication(App, appConfig, context);

export default bootstrap;

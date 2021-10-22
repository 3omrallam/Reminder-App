import { ViewModule } from './view/view.module';
import { AppRouterModule } from './app-router.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

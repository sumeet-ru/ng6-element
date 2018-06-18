import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { GifEngineComponent } from './gif-engine/gif-engine.component';

import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    GifEngineComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [GifEngineComponent],
  entryComponents: [GifEngineComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const table = createCustomElement(GifEngineComponent, { injector: this.injector });
    customElements.define('gif-engine', table);
  }
}

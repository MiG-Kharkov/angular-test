import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewComponentComponent} from './new-component/new-component.component';
import {NewServiceService} from './services/new-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NewServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

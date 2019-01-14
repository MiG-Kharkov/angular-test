import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewComponentComponent} from './new-component/new-component.component';
import {NewServiceService} from './services/new-service.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {LoginComponent} from './features/login/login.component';
import {MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule} from '@angular/material';
import {BorderSizeComponent} from './border-size/border-size.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    LoginComponent,
    BorderSizeComponent
  ],
  entryComponents: [
    BorderSizeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    NewServiceService, {provide: '_count', useValue: 100}
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

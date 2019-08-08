import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { AppWarningAlertComponent } from './app-warning-alert/app-warning-alert.component';
import { AppSuccessAlertComponent } from './app-success-alert/app-success-alert.component';
import {FormsModule} from '@angular/forms';
import {FoundationModule} from './foundation/foundation.module';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AppWarningAlertComponent,
    AppSuccessAlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FoundationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

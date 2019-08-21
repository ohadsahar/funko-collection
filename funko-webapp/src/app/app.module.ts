import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSystemContentComponent } from './core/components/login-system/login-system-content/login-system-content.component';
import { LoginSystemNavbarComponent } from './core/components/login-system/login-system-navbar/login-system-navbar.component';
import { LoginDialogComponent } from './shared/dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './shared/dialogs/register-dialog/register-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginSystemContentComponent,
    LoginSystemNavbarComponent,
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DeviceDetectorModule.forRoot(),
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  entryComponents: [RegisterDialogComponent, LoginDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

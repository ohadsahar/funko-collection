import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSystemContentComponent } from './core/components/login-system/login-system-content/login-system-content.component';
import { AuthInterceptor } from './core/components/login-system/login-system-navbar/auth-interceptor.component';
import { LoginSystemNavbarComponent } from './core/components/login-system/login-system-navbar/login-system-navbar.component';
import { MainMenuComponent } from './core/components/main-menu/main-menu.component';
import { MainNavbarComponent } from './core/components/main-navbar/main-navbar.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { FreezeAccountDialogComponent } from './shared/dialogs/freeze-account-dialog/freeze-account-dialog.component';
import { LoginDialogComponent } from './shared/dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './shared/dialogs/register-dialog/register-dialog.component';
import { ShutdownAccountDialogComponent } from './shared/dialogs/shutdown-account-dialog/shutdown-account-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSystemContentComponent,
    LoginSystemNavbarComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    MainMenuComponent,
    MainNavbarComponent,
    FreezeAccountDialogComponent,
    ShutdownAccountDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DeviceDetectorModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  entryComponents: [RegisterDialogComponent, LoginDialogComponent, FreezeAccountDialogComponent,
  ShutdownAccountDialogComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

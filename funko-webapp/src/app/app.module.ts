import { UserProfileComponent } from './core/components/user-profile/user-profile.component';
import { MainMenuComponent } from './core/components/main-menu/main-menu.component';
import { AuthInterceptor } from './core/components/login-system/login-system-navbar/auth-interceptor.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AngularMaterialModule } from './modules/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSystemContentComponent } from './core/components/login-system/login-system-content/login-system-content.component';
import { LoginSystemNavbarComponent } from './core/components/login-system/login-system-navbar/login-system-navbar.component';
import { LoginDialogComponent } from './shared/dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './shared/dialogs/register-dialog/register-dialog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainNavbarComponent } from './core/components/main-navbar/main-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginSystemContentComponent,
    LoginSystemNavbarComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    UserProfileComponent,
    MainMenuComponent,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DeviceDetectorModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  entryComponents: [RegisterDialogComponent, LoginDialogComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

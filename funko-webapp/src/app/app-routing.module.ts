import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'user-profile',
  loadChildren: './core/components/user-profile/user-profile-modules/user-profile.module#UserProfileModule'
},
{
  path: 'account-settings',
  loadChildren: './core/components/user-account-settings/user-account-settings-module/user-account-settings.module#UserAccountSettingModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

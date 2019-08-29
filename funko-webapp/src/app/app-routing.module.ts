import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'user-section',
  loadChildren: './core/components/user-section/user-section-modules/user-section.module#UserSectionModule'
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

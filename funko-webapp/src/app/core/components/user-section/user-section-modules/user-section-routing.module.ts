import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserCollectionComponent } from '../user-collection/user-collection.component';
import { UserFunkoWallComponent } from '../user-funko-wall/user-funko-wall.component';


const routes: Routes = [{ path: 'profile', component: UserProfileComponent },
{ path: 'collection', component: UserCollectionComponent },
{ path: 'funko-wall', component: UserFunkoWallComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSectionRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AdminManagementComponent} from './admin-management/admin-management.component';
import{UserManagementComponent} from './user-management/user-management.component';

const routes: Routes = [
  { path: "", redirectTo: "admin", pathMatch: "full" },
  { path: "admin", component:AdminManagementComponent },
  {path:'user-management',component:UserManagementComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

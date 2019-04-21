import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import{AdminManagementComponent } from './admin-management/admin-management.component';
import{UserManagementComponent} from './user-management/user-management.component';
//import{RoleManagementServiceService} from './role-management-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminManagementComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

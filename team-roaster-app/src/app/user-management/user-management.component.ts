import { Component,OnInit } from '@angular/core';

@Component({
  
  templateUrl: './user-management.component.html',

})
export class UserManagementComponent implements OnInit {
  public showAdmin:boolean = false;
  public roleMangementData : any[]=[];

  
  ngOnInit(){
      this.roleMangementData = [
          {
            "sno":1,"roleName":"admin","roles":"Edit","train":"Edit","scrumTeam":"Edit","users":"Edit","myTeam":"NO Accesss"
          },
          {
            "sno":1,"roleName":"admin","roles":"Edit","train":"Edit","scrumTeam":"Edit","users":"Edit","myTeam":"NO Accesss"
          },
          {
            "sno":1,"roleName":"admin","roles":"Edit","train":"Edit","scrumTeam":"Edit","users":"Edit","myTeam":"NO Accesss"
          },
          {
            "sno":1,"roleName":"admin","roles":"Edit","train":"Edit","scrumTeam":"Edit","users":"Edit","myTeam":"NO Accesss"
          }
      ]
  }


}
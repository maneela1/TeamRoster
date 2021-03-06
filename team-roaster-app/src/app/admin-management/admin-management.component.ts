import { Component,OnInit } from '@angular/core';

import * as saveAs from 'file-saver';

@Component({
  
  templateUrl: './admin-management.component.html',

})
export class AdminManagementComponent implements OnInit {
  public showAdmin:boolean = false;
  public roleMangementData : any[]=[];

  constructor(){}
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
      ];
      
    
    }

    exportData(){
    //  let data = this.roleMangementData.json();
       let file = new Blob([JSON.stringify(this.roleMangementData)], { type: 'text/csv;charset=utf-8' });
        saveAs(file, 'helloworld.csv')
    }

  }

import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  username:string="Rani"
  constructor(private _userName:DataServiceService){

  }
  ngOnInit(){
        this._userName.userName.subscribe((res:any)=>{
          this.username = res;
        });
  }

  upateName(user:string){
    this._userName.userName.next(user);
  }

}

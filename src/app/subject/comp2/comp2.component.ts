import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private userData: DataServiceService) { }
  userobj:any;
  keyword:any;
  ngOnInit(): void {
    this.userData.getData().subscribe((res)=>{
      this.userobj = res;
      console.log(res);
    },
    (error)=>{
      console.log(error,"Error here...");
    });
  }

}

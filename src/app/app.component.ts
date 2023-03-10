import { Component } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjsPractice';
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

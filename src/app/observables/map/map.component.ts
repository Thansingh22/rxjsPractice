import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
  // obj=[
  //   {name: "Rahul" , age: 22},
  //   {name: "keshav" , age: 10},
  //   {name: "sahil" , age: 25},
  //   {name: "raju" , age: 45},
  // ]
  data = from([
    {name: "Rahul" , age: 22},
    {name: "keshav" , age: 10},
    {name: "sahil" , age: 25},
    {name: "raju" , age: 45},
    {name: "rohit" , age: 30}
  ]);
  ngOnInit(): void {
    this.data.pipe(
      map(({age})=>age)
    ).subscribe((res)=>{
      console.log(res);
    });

   // console.log(this.obj);
  }

}

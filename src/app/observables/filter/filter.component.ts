import { Component, OnInit } from '@angular/core';
import { filter, fromEvent, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  username!:string;
  obj=[
    {name:"rahul", age:20, rollno: 101},
    {name:"keshav", age:21, rollno: 102},
    {name:"kabir", age:55, rollno: 103},
    {name:"ajay", age:33, rollno: 104},
    {name:"kaju", age:45, rollno: 105},
    {name:"shubham", age:85, rollno: 106},
  ]
  constructor() { }
  ngOnInit(): void {

    // object filter

    const userData = from(this.obj);
   const filterData = userData.pipe(filter((val:any)=>{
      return val.age == 21;
   }));
    filterData.subscribe((res:any)=>{
      this.username = res.name;
      console.log(userData);
    });


// example two..
    const clicks = fromEvent(document, 'click');
    const clicksOnDivs = clicks.pipe(filter(ev => (<HTMLElement>ev.target).tagName === 'DIV'));
    clicksOnDivs.subscribe(x => {
      alert("this is Div");
    });

  }



}

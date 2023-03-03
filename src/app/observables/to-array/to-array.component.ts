import { Component, OnInit } from '@angular/core';
import { from, of, take, timer, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  constructor() { }
  user=[
    {name:"rahul"},
    {name:"kabir"},
    {name:"keshav"}
  ];
  ngOnInit(): void {
    //const data = interval(1000);
    const data = timer(5000, 1000)
    data.pipe(
      take(10),
      toArray()
    ).subscribe((res:any)=>{
      console.log(res);
    });

    // example two

    const data2 = from(this.user);
    data2.pipe(
      toArray()
    ).subscribe((res)=>{
      console.log(res);
    });

    // example three

    const data3 = of("rahul", "Kabir", "keshav");
    data3.pipe(
      toArray()
    ).subscribe((res)=>{
      console.log(res);
    });
  }

}

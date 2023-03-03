import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit{

  @ViewChild('addList')
  addList!: ElementRef;
  constructor() { }
  ngAfterViewInit() {
    let count =1;
    let list = document.getElementById("list");
    fromEvent(this.addList.nativeElement, 'click').subscribe(()=>{
      this.print(count++);
    });
  }

  ngOnInit(){
    setTimeout(() => {
      console.log("Hello ")
  }, 5000);
  }

  print(data:any){
    let el = document.createElement('li');
    el.innerHTML+=`<li>Video ${data}</li>`;
    document.getElementById("list")?.appendChild(el);
  }






}

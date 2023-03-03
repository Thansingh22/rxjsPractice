import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  dataSubscription!: Subscription;
count: any = 0;
  ngOnInit(): void {
   // const data = interval(1000);  // interval(speed);
    const data = timer(5000, 1000); // timer(delay, speed);
    this.dataSubscription = data.subscribe(()=>{
      console.log(this.count++);
      if(this.count>=5){
        this.dataSubscription.unsubscribe();
      }
    });
  }

}

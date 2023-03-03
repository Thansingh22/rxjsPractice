import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  subscribe() {
    throw new Error('Method not implemented.');
  }
  constructor(private client : HttpClient) { }

  //subject
  userName = new Subject();

  // fetching api
  getData(){
    return this.client.get("https://jsonplaceholder.typicode.com/users");
  }


}

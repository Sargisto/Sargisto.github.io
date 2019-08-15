import { Component } from '@angular/core';
import { Http, HttpModule, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
 templateUrl:'./app.component.html',
 styleUrls:['./app.component.css']
 })


@Injectable()
export class Proxy {
  http: Http;
  constructor(http: Http, public router: Router) {
    this.http = http;
  }
 

  ChangeClientBalance(params: any) {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('session_id','f622a18d-79e1-4115-b767-77bd05e76b02');
    return this.http.post('https://api.cinetrika.com/api/ContentManagement/CitiesList',
     params, { headers: headers }).pipe(((res) => { return res }));

  }

  


}
export class AppComponent {
  constructor(private http:HttpClient){}

 f1(){
     // alert(859)
 //  console.log(this.http) 
  } 
}

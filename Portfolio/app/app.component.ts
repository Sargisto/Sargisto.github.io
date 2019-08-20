import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-root',
  //server@ tesnelu hamar//   template:`<div>
  // <h1>Angular routes</h1>
  // <nav>
  // <a routerLink="">Glxavor</a><br/>
  // <a routerLink="/about">Mer masin</a><br/>
  // <a routerLink="/news">Norutyunner</a><br/>
  // <a routerLink="/price">Gner</a><br/>
  // </nav>
  // <router-outlet></router-outlet>
  // </div>`
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //  title = "Sargisi Angular 6@";
  //  constructor(svc:NewServiceService){
  //    svc.consoleText("hello server")
  // }
  cars: any;
  carName: string = '';
  carColor:string='';
  userName: string = "";
  response: any;
  pipe: string = 'developer';
  constructor(private http: HttpClient, private carService: NewServiceService) { }

  loadCars() {
    this.carService.getCars().subscribe((data) => {
      console.log(data)
      this.cars = data;
    })
  }

  addCar() {
    this.carService.addCar(this.carName,this.carColor)
      .subscribe((data) => {
        this.cars.push(data);
      });
    this.carName = '';
  }

  hider() {

    $("h2").toggle(1000);
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }

  see() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('session_id', 'f622a18d-79e1-4115-b767-77bd05e76b02');
    // return this.http.post('https://api.cinetrika.com/api/ContentManagement/CitiesList',
    this.http.post('https://api.cinetrika.com/api/ContentManagement/CitiesList', {
      naem: 'John',
      age: 27,

    })
      .subscribe((response) => {
        this.response = response;
        console.log(this.response.age);
      })
  }

}

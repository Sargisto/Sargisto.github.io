import { Injectable } from '@angular/core';
//import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  consoleText(arg) {
    console.log(arg);

  }

  constructor(private http: HttpClient) {

  }

  getCars() {
    return this.http.get('http://localhost:3000/cars');
  }

  addCar(carName: string,carColor:string) {
    let data = {
      name: carName,
      color: carColor
    }
    return this.http.post('http://localhost:3000/cars', data)
  }
}

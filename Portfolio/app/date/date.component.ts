import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  message: string;
  eventText: Boolean = true;
  date: any;
  items = ['Angular', 'React', 'jQuery', 'Vue'];
  loggedIn = true;
  inpText: string = 'Hello World';
  visible: boolean = true;

  constructor() {
    this.message = 'frangyulin';
    setInterval(() => {
      this.date = new Date(), 1000
    })
  }
  toggleText() {
    this.eventText = !this.eventText;

  }
  toggle() {
    this.visible = !this.visible;
  }
  sub(add, ado) {
    this.items.unshift(ado);
    this.items.push(add);
    return false;
  }
  del(that) {
    // console.log(that);
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == that) {
        this.items.splice(i, 1);
        break;
      }
    }
  }
  ngOnInit() {

  }

}

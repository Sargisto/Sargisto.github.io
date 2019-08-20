import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  table: any[];
  vide: boolean = false;
  EditTd: any = '';
  model: any = {
    id: null,
    name: null,
    surname: null,
    adress: null,
    number: null
  }
  a: any;

  constructor() {
    this.table = [
      { id: 1, name: 'Sargis', surname: 'Sargsyan', adress: 'Hrazdan', number: '91' },
      { id: 2, name: 'Aram', surname: 'Karoyan', adress: 'Xapan', number: '93' },
      { id: 3, name: 'Vaxo', surname: 'Sisakyan', adress: 'Vanadzor', number: '55' },

    ];

  }
  ref() {
    this.table = [
      { id: 1, name: 'Sargis', surname: 'Sargsyan', adress: 'Hrazdan', number: '91' },
      { id: 2, name: 'Aram', surname: 'Karoyan', adress: 'Xapan', number: '93' },
      { id: 3, name: 'Vaxo', surname: 'Sisakyan', adress: 'Vanadzor', number: '55' },
    ];
  }

  Edit(val) {
    this.EditTd = val;
  }

  save() {
    this.EditTd = !this.EditTd;
    this.table[1].id !== this.EditTd
  }

  add() {
    let ddd = JSON.parse(JSON.stringify(this.model));
    this.table.push(ddd);
    this.table[this.table.length - 1].id = this.table.length;
    for (let i = 0; i < this.table.length; i++) {
      this.table[i].id = i + 1;
    }

  }

  del(that) {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] == that) {
        this.table.splice(i, 1);
      }
      this.table[i].id = i + 1;
    }

  }

  del_all(){
    this.table.splice(0);
  }

  togEdit() {
    this.vide = !this.vide;
  }

  ngOnInit() {
   
  }

}

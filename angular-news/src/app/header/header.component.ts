import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  today: string;

  constructor() { }

  ngOnInit() {
    var dd = String(this.date.getDate()).padStart(2, '0');
    var mm = String(this.date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = this.date.getFullYear();
    this.today = mm + '/' + dd + '/' + yyyy;
  }

}

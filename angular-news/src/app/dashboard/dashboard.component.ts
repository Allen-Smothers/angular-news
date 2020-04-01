import { Component, OnInit } from '@angular/core';

import { Featured } from '../featured';
import { NewsfeedService } from '../newsfeed.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  featured: Featured[] = [];
  aside: Featured[] = [];
  main: Featured[] = [];
  opinion: Featured[] = [];
  travel: Featured[] = [];

  constructor(private newsfeedService: NewsfeedService) { }ß

  ngOnInit() {

    this.getFeatured();
  }

  getFeatured(): void {
    this.newsfeedService.getFeatured().subscribe(f => {
      this.featured = f;
      this.aside = f.filter(a => { return a.description.toLowerCase() === 'aside'});
      this.main = f.filter(a => { return a.description.toLowerCase() === 'main'});
      this.opinion = f.filter(a => { return a.description.toLowerCase() === 'opinion'});
      this.travel = f.filter(a => { return a.description.toLowerCase() === 'travel'});
    });
  }

  counter(i: number) {
    return new Array(i);
  }
}

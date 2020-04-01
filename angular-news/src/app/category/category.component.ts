import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../article';

import { NewsfeedService } from '../newsfeed.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  articles: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    private newsfeedService: NewsfeedService,
    private location: Location) {
      route.params.subscribe(val => {
        console.log('init category ');
        this.getArticles();
      });
     }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('init category ' + id);
    this.newsfeedService.getArticlesByCategory(id)
      .subscribe(a => this.articles = a);
  }

  counter(i: number) {
    return new Array(i);
  }

}

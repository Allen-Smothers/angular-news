import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { NewsfeedService } from '../newsfeed.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  categories: Category[] = [];

  constructor(private newsfeedService: NewsfeedService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.newsfeedService.getCategories().subscribe(c => {
      this.categories = c;
    });
  }

}

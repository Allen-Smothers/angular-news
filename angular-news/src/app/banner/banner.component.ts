import { Component, OnInit } from '@angular/core';
import { Banner } from '../banner';
import { NewsfeedService } from '../newsfeed.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banners: Banner[] = [];
  showCont: boolean = false;

  constructor(private newsfeedService: NewsfeedService) { }

  ngOnInit() {
    this.getBanner();
  }

  getBanner(): void {
    this.newsfeedService.getBanner().subscribe(b => {
      this.banners = b;
    });
  }

  toggleBanner(){
    this.showCont = !this.showCont; 
  }

}

import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-latest-tech-news',
  templateUrl: './latest-tech-news.component.html',
  styleUrls: ['./latest-tech-news.component.css']
})
export class LatestTechNewsComponent implements OnInit{
  articles: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (response: any) => {
        this.articles = response.articles;
      },
      (error: any) => {
        console.error('Error fetching news', error);
      }
    );
  }
}

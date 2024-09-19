import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/bookservice.service';

@Component({
  selector: 'app-resourcecenter',
  templateUrl: './resourcecenter.component.html',
  styleUrls: ['./resourcecenter.component.css']
})
export class ResourcecenterComponent implements OnInit{
  books: any[] = [];
  query: string = '';

  constructor(private bookService: BookserviceService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.searchBooks(this.query).subscribe(response => {
      this.books = response.items || [];
    });
  }

  onSearch(): void {
    this.loadBooks();
  }
}

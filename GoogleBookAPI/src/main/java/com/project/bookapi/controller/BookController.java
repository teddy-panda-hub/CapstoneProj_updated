package com.project.bookapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.bookapi.service.GoogleBooksService;

@CrossOrigin("http://localhost:4200")
@RestController
public class BookController {

	private final GoogleBooksService googleBooksService;

    public BookController(GoogleBooksService googleBooksService) {
        this.googleBooksService = googleBooksService;
    }

    @GetMapping("/books")
    public String getBooks(@RequestParam(required = false) String query) {
        return googleBooksService.searchBooks(query);
    }
}

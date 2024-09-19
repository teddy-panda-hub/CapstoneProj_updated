package com.project.bookapi.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class GoogleBooksService {

    @Value("${google.books.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate;

    public GoogleBooksService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String searchBooks(String query) {
    	String searchQuery = (query == null || query.isEmpty()) ? "Technology" : query;

        String url = UriComponentsBuilder.fromHttpUrl("https://www.googleapis.com/books/v1/volumes")
                .queryParam("q", searchQuery)
                .queryParam("key", apiKey)
                .toUriString();
        
        return restTemplate.getForObject(url, String.class);
    }
}

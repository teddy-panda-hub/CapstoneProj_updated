package com.project.newsapi.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class NewsService {

    @Value("${newsapi.key}")
    private String apiKey;

    private final String BASE_URL = "https://newsapi.org/v2/top-headlines";

    public Map<String, Object> getTopHeadlines(String category) {
        RestTemplate restTemplate = new RestTemplate();

        // Building the URL without the country parameter
        String url = UriComponentsBuilder.fromHttpUrl(BASE_URL)
                .queryParam("category", category)
                .queryParam("language", "en") 
                .queryParam("apiKey", apiKey)
                .toUriString();

        // Make the GET request
        Map<String, Object> response = restTemplate.getForObject(url, Map.class);

        return response;
    }
}


//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//import org.springframework.web.client.RestTemplate;
//import org.springframework.web.util.UriComponentsBuilder;
//
//@Service
//public class NewsService {
//
//    @Value("${newsapi.key}")
//    private String apiKey;
//
//    private final String BASE_URL = "https://newsapi.org/v2/everything";  // Use 'everything' endpoint for broader search
//
//    public Map<String, Object> getFilteredNews(String query) {
//        RestTemplate restTemplate = new RestTemplate();
//
//        // Building the URL with language parameter and shortened query
//        String url = UriComponentsBuilder.fromHttpUrl(BASE_URL)
//                .queryParam("q", query)  // Shortened query
//                .queryParam("language", "en")  // Ensure language is set to 'en'
//                .queryParam("apiKey", apiKey)
//                .toUriString();
//
//        // Make the GET request
//        Map<String, Object> response = restTemplate.getForObject(url, Map.class);
//
//        return response;
//    }
//
//    // Method to handle multiple queries
//    public List<Map<String, Object>> getMultipleFilteredNews(List<String> queries) {
//        RestTemplate restTemplate = new RestTemplate();
//        List<Map<String, Object>> results = new ArrayList<>();
//
//        for (String query : queries) {
//            String url = UriComponentsBuilder.fromHttpUrl(BASE_URL)
//                    .queryParam("q", query)  // Shortened query
//                    .queryParam("language", "en")  // Ensure language is set to 'en'
//                    .queryParam("apiKey", apiKey)
//                    .toUriString();
//
//            Map<String, Object> response = restTemplate.getForObject(url, Map.class);
//            results.add(response);
//        }
//
//        return results;
//    }
//}
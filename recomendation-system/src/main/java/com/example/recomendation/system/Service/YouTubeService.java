package com.example.recomendation.system.Service;

import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.SearchListResponse;
import com.google.api.services.youtube.model.SearchResult;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class YouTubeService {

    private static final String API_KEY = "AIzaSyB601r4uWL-MC9d498vHHW-Gcla0xYn6Sk";
    private static final String APPLICATION_NAME = "YouTubeRecommendationApp";
    private static final String QUERY = "Subject courses research";

    public List<SearchResult> searchVideos(String query) throws IOException {
        YouTube youtube = new YouTube.Builder(new NetHttpTransport(), new JacksonFactory(), null)
                .setApplicationName(APPLICATION_NAME)
                .build();

        YouTube.Search.List search = youtube.search().list("snippet");
        search.setKey(API_KEY);
        search.setQ(query);
        search.setType("video");
        search.setMaxResults(9L);

        SearchListResponse response = search.execute();
        return response.getItems();
    }
}

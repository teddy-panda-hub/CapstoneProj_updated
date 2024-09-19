package com.example.recomendation.system.Controller;

import com.example.recomendation.system.Service.YouTubeService;
import com.google.api.services.youtube.model.SearchResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class YouTubeController {

    @Autowired
    private YouTubeService youtubeService;

    @GetMapping("/api/videos")
    public List<SearchResult> getVideos(@RequestParam String query) throws IOException {
        return youtubeService.searchVideos(query);
    }
}

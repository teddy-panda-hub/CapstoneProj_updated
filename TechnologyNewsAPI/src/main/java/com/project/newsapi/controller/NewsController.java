package com.project.newsapi.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.newsapi.service.NewsService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @GetMapping("/top-headlines")
    public Map<String, Object> getTopHeadlines(
            @RequestParam(defaultValue = "technology") String category) {
        return newsService.getTopHeadlines(category);
    }
}


//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.project.newsapi.service.NewsService;
//
//@RestController
//@RequestMapping("/news")
//public class NewsController {
//
//    @Autowired
//    private NewsService newsService;
//
//    @GetMapping("/filtered-news")
//    public Map<String, Object> getFilteredNews(
//            @RequestParam(defaultValue = "education personal development academic achievements online courses learning strategies\r\n"
//            		+ "technology innovations digital transformation future tech trends tech startups\r\n"
//            		+ "success stories motivational quotes personal growth\r\n"
//            		+ "scientific discoveries research advancements STEM research academic studies\r\n"
//            		+ "AI machine learning cybersecurity blockchain programming IoT robotics")
//                   String query) {
//        return newsService.getFilteredNews(query);
//    }
//}

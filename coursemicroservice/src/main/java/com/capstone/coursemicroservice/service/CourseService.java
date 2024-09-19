package com.capstone.coursemicroservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.capstone.coursemicroservice.entity.Course;
import com.capstone.coursemicroservice.repository.CourseRepository;
import com.projectums.entity.Student;

@Service
public class CourseService {
    
    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private RestTemplate restTemplate;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(Integer courseId) {
        return courseRepository.findById(courseId).orElse(null);
    }

    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course updateCourse(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> getAllCoursesByStudentId(Integer studentId) {
        String studentServiceUrl = "http://localhost:5555/user/" + studentId + "/courses";
        
        // Create an empty HttpEntity since no headers or body are needed
        HttpEntity<String> entity = new HttpEntity<>(null, null);
        
        // Correct the exchange method usage
        ResponseEntity<List> response = restTemplate.exchange(
                studentServiceUrl,
                HttpMethod.GET,
                entity,
                List.class
        );
        
        return courseRepository.findAllById(response.getBody());
    }

    public List<Course> getAllCoursesByProfessorId(Integer professorId) {
        String teacherServiceUrl = "http://localhost:5555/user/professor/" + professorId + "/courses"; // Adjust the URL as necessary
        List<Integer> courseIds = restTemplate.getForObject(teacherServiceUrl, List.class);
        return courseRepository.findAllById(courseIds);
    }

    public byte[] getResourceByCourseId(Integer courseId) {
        Course course = courseRepository.findById(courseId).orElse(null);
        return course != null ? course.getResource() : null;
    }
    
//    public List<Student> getStudentsByCourseId(Integer courseId) {
//        String url = "http://5555/user/byCourse/" + courseId;
//        List<Student> students = restTemplate.getForObject(url, List.class);
//        return students;
//    }
}

package com.capstone.coursemicroservice.controller;


import com.capstone.coursemicroservice.entity.Course;
import com.capstone.coursemicroservice.service.CourseService;
import com.projectums.entity.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping("/getAll")
    public List<Course> getAllCourses() {

        return courseService.getAllCourses();
    }


    @PostMapping("/addCourse")
    public Course addCourse(@RequestBody Course course) {

        return courseService.saveCourse(course);
    }

    @PutMapping("/updateCourse")
    public Course updateCourse(@RequestBody Course course) {

        return courseService.updateCourse(course);
    }

    @GetMapping("/student/{studentId}")
    public List getAllCoursesByStudentId(@PathVariable Integer studentId) {
        return courseService.getAllCoursesByStudentId(studentId);
    }



    @GetMapping("/professor/{professorId}")
    public List<Course> getAllCoursesByProfessorId(String token,@PathVariable Integer professorId) {

        return courseService.getAllCoursesByProfessorId(professorId);
    }

    @GetMapping("/showResource/{courseId}")
    public ResponseEntity<ByteArrayResource> showResource(@PathVariable Integer courseId) {
        byte[] resourceData = courseService.getResourceByCourseId(courseId);
        if (resourceData == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        ByteArrayResource resource = new ByteArrayResource(resourceData);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"course_" + courseId + ".pdf\"")
                .contentLength(resourceData.length)
                .contentType(MediaType.APPLICATION_PDF)
                .body(resource);
    }
    
//    @GetMapping("/{courseId}/students")
//    public ResponseEntity<List<Student>> getStudentsByCourseId(@PathVariable Integer courseId) {
//        List<Student> students = courseService.getStudentsByCourseId(courseId);
//        return ResponseEntity.ok(students);
//    }



    }

//    @DeleteMapping("/{courseId}")
//    public void deleteCourse(@PathVariable Integer courseId) {
//        courseService.deleteCourse(courseId);
//    }

//    @GetMapping("/{courseId}/professor")
//    public String getProfessorName(@PathVariable Integer courseId) {
//        Course course = courseService.getCourseById(courseId);
//        return courseService.getProfessorNameById(course.getProfessorId());
//    }

//    public List<Course> getAssignmentsByCourseId(@PathVariable Integer courseId) {
//        return courseService.getAssignmentsByCourseId();
//    }
//    @GetMapping("/getOverallScore")
//    public int getOverallScore(@RequestParam Integer courseId, @RequestParam List<Long> assignmentIds) {
//        return courseService.getOverallScore(courseId);
//    }



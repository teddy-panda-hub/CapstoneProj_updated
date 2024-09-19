package com.projectums.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectums.entity.Professor;
import com.projectums.entity.Student;
import com.projectums.repository.ProfessorRepository;
import com.projectums.repository.StudentRepository;
import com.projectums.service.ProfessorService;
import com.projectums.service.StudentService;

@RestController
@RequestMapping("/user")
public class LoginController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private ProfessorService professorService;
    
    @Autowired
    private StudentRepository studentRepo;
    
    @Autowired
    private ProfessorRepository professorRepo;

    @GetMapping("/")
    public String welcomeMessage() {
        return "Welcome to Elearning Management system !!!";
    }

    @PostMapping("/loginstudent")
//    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Integer> loginStudent(@RequestBody Student student) {
        Integer response ;
        System.out.println(student);
        Student s=new Student();
        s=studentRepo.findByUsername(student.getUsername());
        // Here we validate credentials without using JWT
        if (studentService.authenticate(student.getUsername(), student.getPassword())) {
//            response.put("Login successful", 1);
            response=(s.getStudentId()); // You can customize the response as needed
            return ResponseEntity.ok(response);
        } else {
            response=0;
            return ResponseEntity.status(401).body(response);
        }
    }

    @PostMapping("/loginprofessor")
//    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Integer> loginProfessor(@RequestBody Professor professor) {
        Integer response;
        System.out.println(professor);
        Professor prof=new Professor();
        prof=professorRepo.findByUsername(professor.getUsername());
        
        // Here we validate credentials without using JWT
        if (professorService.authenticate(professor.getUsername(), professor.getPassword())) {
        	response=(prof.getProfessorId()); // You can customize the response as needed
            return ResponseEntity.ok(response);
        } else {
        	response=0;
            return ResponseEntity.status(401).body(response);
        }
    }
}

package com.projectums.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectums.entity.Student;
import com.projectums.service.ProfessorService;
import com.projectums.service.StudentService;

@RestController
@RequestMapping("/user")
//@RequestMapping("/students")
public class UserController 
{
	@Autowired
	private StudentService studentService;
	
	@Autowired
	private ProfessorService professorService;
	
	@GetMapping("/studentlist")
//	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Student>> getStudents() throws Exception
	{
		List<Student> students = studentService.getAllUsers();
		return new ResponseEntity<List<Student>>(students, HttpStatus.OK);
	}

	@GetMapping("/studentprofileDetails/{id}")
//	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<Student> getProfileDetails(@PathVariable Integer id) throws Exception
	{
		Optional<Student> students = studentService.fetchUserById(id);
		Student s=students.get();
		return new ResponseEntity<Student>(s, HttpStatus.OK);
	}
	
	@PutMapping("/updatestudent")
//	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<Student> updateStudentProfile(@RequestBody Student student) throws Exception
	{
		Student userobj = studentService.updateUserProfile(student);
		return new ResponseEntity<Student>(userobj, HttpStatus.OK);
	}
	
	@GetMapping("/gettotalstudents")
//	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalStudents() throws Exception
	{
		List<Student> students = studentService.getAllUsers();
		List<Integer> usersCount = new ArrayList<>();
		usersCount.add(students.size());
		return new ResponseEntity<List<Integer>>(usersCount, HttpStatus.OK);
	}

	@GetMapping("/{studentId}/courses")
	public List<Integer> getCourseIdsByStudentId(@PathVariable Integer studentId) {
		return studentService.getCourseIdsByStudentId(studentId);
	}
	
	@GetMapping("/byCourse/{courseId}")
    public ResponseEntity<List<Student>> getStudentsByCourseId(@PathVariable Integer courseId) {
        List<Student> students = studentService.getStudentsByCourseId(courseId);
        return ResponseEntity.ok(students);
    }
}

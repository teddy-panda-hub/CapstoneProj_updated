package com.projectums.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectums.entity.Professor;
import com.projectums.entity.Student;
import com.projectums.entity.User;
import com.projectums.repository.ProfessorRepository;
import com.projectums.repository.StudentRepository;
import com.projectums.repository.UserRepository;
import com.projectums.service.ProfessorService;
import com.projectums.service.StudentService;

@RestController
@RequestMapping("/user")
public class RegistrationController {
	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	private UserRepository userrepo;

	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private ProfessorRepository professorRepository;
	
	@Autowired
	private StudentService studentService;
	
	@Autowired
	private ProfessorService professorService;


	@PostMapping("/registerstudent")
//	@CrossOrigin(origins = "http://localhost:4200")
	public Student registerStudent(@RequestBody Student student) throws Exception
	{

		//The goal is to save the username,id,password and role in the user tabel ...and everything except role in the student table

        String password= student.getPassword();
		String encodedPassword = passwordEncoder.encode(password);

        // Create a new user object
        Student student1 = studentService.saveUser(student);
        student1.setPassword(encodedPassword);

		String username=student.getUsername();
		int id=student.getStudentId();
//		System.out.println(id);


		User user1=new User();
		user1.setUserid(id);
		user1.setUsername(username);
		user1.setPassword(encodedPassword);
		user1.setRole("STUDENT");
        // Save the student to the database(student table)...and also to the sec_user table
        userrepo.save(user1);
		return studentRepository.save(student1);
	}
	
	@PostMapping("/registerprofessor")
//	@CrossOrigin(origins = "http://localhost:4200")
	public Professor registerProfessor(@RequestBody Professor professor) throws Exception
	{


		String password=professor.getPassword();
		String encodedPassword = passwordEncoder.encode(password);
		
		Professor professor2=professorService.saveProfessor(professor);
		professor2.setPassword(encodedPassword);




		String username=professor.getUsername();
		int id=professor.getProfessorId();


		User user1=new User();
		user1.setUserid(id);
		user1.setUsername(username);
		user1.setPassword(encodedPassword);
		user1.setRole("PROFESSOR");


		userrepo.save(user1);
		return professorRepository.save(professor2);
	}
}
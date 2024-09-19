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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectums.entity.Professor;
import com.projectums.service.ProfessorService;

@RestController
//@RequestMapping("/professor")
@RequestMapping("/user")
public class ProfessorController 
{	
	@Autowired
	private ProfessorService professorService;
	
	@GetMapping("/professorlist")
//	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Professor>> getProfessorList() throws Exception
	{
		List<Professor> professors = professorService.getAllProfessors();
		return new ResponseEntity<List<Professor>>(professors, HttpStatus.OK);
	}
	
	@GetMapping("/professorlistbyemail/{email}")
//	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Professor>> getProfessorListByEmail(@PathVariable String email) throws Exception
	{
		List<Professor> professors = professorService.getProfessorsByEmail(email);
		return new ResponseEntity<List<Professor>>(professors, HttpStatus.OK);
	}
	
	@PostMapping("/addProfessor")
//	@CrossOrigin(origins = "http://localhost:4200")
	public Professor addNewProfessor(@RequestBody Professor professor) throws Exception
	{
//		Professor professorObj = null;
//		Integer newID = getNewID(5);
//		professor.setProfessorId();
//		professorObj = professorService.addNewProfessor(professor);
//		return professorObj;
		return professorService.addNewProfessor(professor);
	}
	
	@GetMapping("/professorprofileDetails/{id}")
//	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<Professor> getProfileDetails(@PathVariable Integer id) throws Exception
	{
		Optional<Professor> professors = professorService.fetchProfessorById(id);
		Professor p=professors.get();
		return new ResponseEntity<Professor>(p, HttpStatus.OK);
	}
	
	@PutMapping("/updateprofessor")
//	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<Professor> updateProfessorProfile(@RequestBody Professor professor) throws Exception
	{
		Professor professorobj = professorService.updateProfessorProfile(professor);
		return new ResponseEntity<Professor>(professorobj, HttpStatus.OK);
	}
	
	@GetMapping("/gettotalprofessors")
//	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalProfessors() throws Exception
	{
		List<Professor> professors = professorService.getAllProfessors();
		List<Integer> professorsCount = new ArrayList<>();
		professorsCount.add(professors.size());
		return new ResponseEntity<List<Integer>>(professorsCount, HttpStatus.OK);
	}
	@GetMapping("/professor/{professorId}/courses")
	public List<Integer> getCourseIdsByProfessorId(@PathVariable Integer professorId) {
		return professorService.getCourseIdsByProfessorId(professorId);
	}


	
}

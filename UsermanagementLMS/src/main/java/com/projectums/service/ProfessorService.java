package com.projectums.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.projectums.entity.Professor;
import com.projectums.repository.ProfessorRepository;

@Service
public class ProfessorService 
{
	@Autowired
	private ProfessorRepository professorRepo;
	
	public Professor saveProfessor(Professor professor)
	{
		return professorRepo.save(professor);
	}
	
	public Professor addNewProfessor(Professor professor)
	{
		return professorRepo.save(professor);
	}
	
	public Professor updateProfessorProfile(Professor professor)
	{
		return professorRepo.save(professor);
	}
	
	public List<Professor> getAllProfessors()
	{
		return (List<Professor>)professorRepo.findAll();
	}
	
	public List<Professor> getProfessorListByEmail(String email) 
	{
		return (List<Professor>)professorRepo.findProfessorListByEmail(email);
	}
	
	public Optional<Professor> fetchProfessorById(Integer Id)
	{
		return professorRepo.findById(Id);
	}
	
	public Professor fetchProfessorByProfessorname(String professorname)
	{
		return professorRepo.findByProfessorname(professorname);
	}
	
	public Professor fetchProfessorByEmailAndPassword(String email, String password)
	{
		return professorRepo.findByEmailAndPassword(email, password);
	}
	
	public List<Professor> fetchProfileByEmail(String email)
	{
		return (List<Professor>)professorRepo.findProfileByEmail(email);
	}

	public List<Professor> getProfessorsByEmail(String email)
	{
		return professorRepo.findProfessorListByEmail(email);
	}

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
//
//	public boolean authenticate(String username, String password) {
//		Professor professor = professorRepo.findByUsername(username);
//		System.out.println("Professor Present");
//		if (professor != null) {
//			return passwordEncoder.matches(password, professor.getPassword());
//		}
//		return false;
//	}
	public boolean authenticate(String username, String password) {
		Professor professor = professorRepo.findByUsername(username);
		System.out.println("Professor Present");
		if (professor != null && passwordEncoder.matches(password, professor.getPassword())) {
			return true;
		}
		return false;
	}
		public List<Integer> getCourseIdsByProfessorId(Integer professorId) {
			// Fetch the professor by ID
			Professor professor = professorRepo.findById(professorId)
					.orElseThrow(() -> new RuntimeException("Professor not found with id: " + professorId));

			// Return the list of course IDs
			return professor.getCourseIds();
		}
}

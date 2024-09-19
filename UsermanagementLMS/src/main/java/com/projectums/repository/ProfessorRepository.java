package com.projectums.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.projectums.entity.Professor;

public interface ProfessorRepository extends CrudRepository<Professor, Integer>
{
	public Professor findByUsername(String username);
    public Professor findByEmail(String email);
    
    public List<Professor> findProfessorListByEmail(String email);
	
	public Professor findByProfessorname(String professorname);
	
	public Professor findByEmailAndPassword(String email, String password);
	
	public List<Professor> findProfileByEmail(String email);
	
//	@Transactional
//	@Modifying
//	@Query(value = "update professor set status = 'accept' where email = ?1", nativeQuery = true)
//	public void updateStatus(String email);
//
//	@Transactional
//	@Modifying
//	@Query(value = "update professor set status = 'reject' where email = ?1", nativeQuery = true)
//	public void rejectStatus(String email);
	
}
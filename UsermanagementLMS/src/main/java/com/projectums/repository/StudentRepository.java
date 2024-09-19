package com.projectums.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.projectums.entity.Student;

public interface StudentRepository extends CrudRepository<Student, Integer>
{

    public Student findByEmail(String email);

    public Student findByUsername(String username);

    public Student findByEmailAndPassword(String email, String password);

    public List<Student> findProfileByEmail(String email);

    public boolean existsByUsername(String username);
    
    @Query("SELECT s FROM Student s WHERE :courseId MEMBER OF s.courseIds")
    List<Student> findByCourseId(@Param("courseId") Integer courseId);

}
package com.capstone.assignmentmicroservice.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.capstone.assignmentmicroservice.entity.Assignment;

public interface AssignmentRepository extends JpaRepository<Assignment, Integer> {
    List<Assignment> findByCourseId(Integer courseId);
//    @Query("SELECT a FROM Assignment a JOIN studentCourse sc ON a.courseId = sc.courseId WHERE sc.studentId = :studentId")
//    List<Assignment> findAssignmentsByStudentId(@Param("studentId") Long studentId);
}

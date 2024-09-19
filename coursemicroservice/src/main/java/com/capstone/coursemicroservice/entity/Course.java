package com.capstone.coursemicroservice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;
    private String courseName;
    private String description;
    private Integer professorId;
    private String semester;
    private byte[] resource;
    private String imageUrl;
//    private byte[] resource;
//    private String studentIds; // Comma-separated string
//    private List<Integer> assignmentIds;

}

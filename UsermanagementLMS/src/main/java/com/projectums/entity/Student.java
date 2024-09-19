package com.projectums.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Student
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer studentId;

	@ElementCollection
	@CollectionTable(name = "student_courses", joinColumns = @JoinColumn(name = "studentId"))
	@Column(name = "course_id")
	private List<Integer> courseIds;

	private String email;
	private String username;
	private String studentName;
	private String mobile;
	private String gender;

	private String address;
	private String password;


//	private String role;


}

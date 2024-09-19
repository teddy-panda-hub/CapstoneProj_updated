package com.projectums.entity;

import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Professor
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer professorId;

	@ElementCollection
	@CollectionTable(name = "professor_courses", joinColumns = @JoinColumn(name = "professor_id"))
	@Column(name = "course_id")
	private List<Integer> courseIds;

	private String email;
	private String professorname;
	private String degreecompleted;
	private String department;
	private String experience;
	private String mobile;
	private String gender;
	private String password;

//	private String role;
	private String username;
}

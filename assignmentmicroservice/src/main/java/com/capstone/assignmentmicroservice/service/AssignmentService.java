package com.capstone.assignmentmicroservice.service;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.capstone.assignmentmicroservice.entity.Assignment;
import com.capstone.assignmentmicroservice.repository.AssignmentRepository;

@Service
public class AssignmentService {

    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private AssignmentRepository assignmentRepository;

    public List<Map<String, Object>> getAllAssignments() {
        String sql = "SELECT assignment_id, professor_id,course_id, title,deadline,file_name FROM assignment ";
        return jdbcTemplate.queryForList(sql);
    }



    public byte[] showAssignmentFileById(Integer id) {
        return assignmentRepository.findById(id)
                .map(assignment -> assignment.getAssignmentFile())
                .orElse(null);
    }
    
//    public List<Assignment> getAllAssignmentsByStudentId(Long studentId) {
//        return assignmentRepository.findAssignmentsByStudentId(studentId);
//    }




    public List<Map<String, Object>> getAssignmentsByCourseId(Integer courseId) {
        String sql = "SELECT assignment_id, professor_id, title,deadline,file_name FROM assignment WHERE course_id = ?";
        return jdbcTemplate.queryForList(sql, courseId);
    }
    public ResponseEntity<String> saveAssignment(MultipartFile file, String title,Integer id,Integer courseid, String deadline) throws IOException {
//        Assignment assignment = new Assignment();
//        assignment.setTitle(title);
//        assignment.setFileName(file.getOriginalFilename());
//        assignment.setAssignmentId(id);
//        assignment.setCourseId(courseid);
//        assignment.setDeadline(deadline);
//
//        assignment.setAssignmentFile(file.getBytes());
//
//        // Save the file to a local directory
////        String localDirectoryPath = "C:\\Users\\284748\\Desktop\\Main capstone code\\capstone_project3-vm-\\capstone_project3\\uploaded documents"; // Change this to your desired path
////        File localFile = new File(localDirectoryPath + file.getOriginalFilename());
////        try (FileOutputStream fos = new FileOutputStream(localFile)) {
////            fos.write(file.getBytes());
////        }

		try {
		// Convert the string deadline to a Date object
		Date deadlineDate = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSX").parse(deadline);
		
		// Create or update the Assignment object
		Assignment assignment = new Assignment();
		assignment.setTitle(title);
		assignment.setAssignmentId(id);
		assignment.setCourseId(courseid);
		assignment.setDeadline(deadlineDate);
		assignment.setAssignmentFile(file.getBytes());
		
		// Save or process the assignment
		assignmentRepository.save(assignment);
		
		return ResponseEntity.ok("Assignment uploaded successfully.");
		} catch (ParseException e) {
		return ResponseEntity.badRequest().body("Invalid date format: " + e.getMessage());
		} catch (Exception e) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload assignment: " + e.getMessage());
		}

        // Save the file data to the database
//        return assignmentRepository.save(assignment);
    }
//
//    public void changeColumnType() {
//        String sql = "ALTER TABLE assignment MODIFY COLUMN assignment_file MEDIUMBLOB";
////        String alterIdSql = "ALTER TABLE assignment MODIFY COLUMN assignmentId INT AUTO_INCREMENT PRIMARY KEY";
//        jdbcTemplate.execute(sql);
////        jdbcTemplate.execute(alterIdSql);
//    }
    public List<Map<String, Object>> getDeadlines(Integer courseId) {
        // Step 1: Fetch assignment details from the assignment table
        String sql = "SELECT title, deadline FROM assignment WHERE course_id = ?";
        List<Map<String, Object>> assignments = jdbcTemplate.queryForList(sql, courseId);

        // Step 2: Call the Course Microservice to get the course name
        String courseServiceUrl = "http://localhost:8761/eureka/courses/" + courseId; // Assuming course service is running on localhost:5002
        Map courseResponse = restTemplate.getForObject(courseServiceUrl, Map.class);
        String courseName = courseResponse != null ? (String) courseResponse.get("courseName") : null;

        // Step 3: Combine assignment details with course name
        return assignments.stream().map(assignment -> {
            Map<String, Object> result = new HashMap<>(assignment);
            result.put("courseName", courseName);
            return result;
        }).collect(Collectors.toList());
    }




//    public Assignment updateAssignment(Assignment assignment) {
//        return assignmentRepository.save(assignment);
//    }
//
//    public void deleteAssignment(Integer assignmentId) {
//        assignmentRepository.deleteById(assignmentId);
//    }


    //    public List<Assignment> getAssignmentsByCourseId(Integer courseId) {
//        return assignmentRepository.findByCourseId(courseId).stream()
//                .map(assignment -> [
//                        assignment.getAssignmentId(),
//                        assignment.getProfessorId(),
//                        assignment.getTitle()])
//                .collect(Collectors.toList());
//    }



//    public Assignment saveAssignment(Assignment assignment) {
//        return assignmentRepository.save(assignment);
//    }

}
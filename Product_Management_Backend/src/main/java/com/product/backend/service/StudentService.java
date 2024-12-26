package com.product.backend.service;

import java.util.List;

import com.product.backend.helper.LoginMessage;
import com.product.backend.model.Appointment;
import com.product.backend.model.LoginDetails;
import com.product.backend.model.Student;

public interface StudentService {
	
	public String saveStudent(Student student);
	
	public List<Appointment> getAllAppointmentsByUsername(String username); 
	
	public Student updateStudent(Student student,String username);
	
	public Student getStudent(String username);
	
	LoginMessage loginStudent(LoginDetails loginDetails);

}

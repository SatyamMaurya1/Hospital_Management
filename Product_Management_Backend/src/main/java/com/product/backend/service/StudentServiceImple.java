package com.product.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.product.backend.helper.LoginMessage;
import com.product.backend.model.Appointment;
import com.product.backend.model.LoginDetails;
import com.product.backend.model.Student;
import com.product.backend.repository.NewAppointmentRepo;
import com.product.backend.repository.StudentRepo;



@Service
public class StudentServiceImple implements StudentService {

	public StudentService studentService;
	
	@Autowired
	private NewAppointmentRepo newAppointmentRepo;
	@Override
	public LoginMessage loginStudent(LoginDetails loginDetails) {
		// TODO Auto-generated method stub
		
		Student st = studentRepo.findByUsernameAndRole(loginDetails.getUsername(), loginDetails.getRole());
        if (st != null) {
            String password = loginDetails.getPassword();
            String savedPass = st.getPassword();
            
            if (password.equals(savedPass)) {
                Student student1= studentRepo.findById(loginDetails.getUsername()).get();
                if (student1!=null) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("password Not Match", false);
            }
        }else {
            return new LoginMessage("Username not exits", false);
        }
		
	}

	@Autowired
	private StudentRepo studentRepo;
	
	@Override
	public Student getStudent(String username) {
		// TODO Auto-generated method stub
		return studentRepo.findById(username).get();
	}

	
	
	@Override
	public String saveStudent(Student student) {
		if(student.getPassword()==null) return "Enter password";
		Student reg=studentRepo.save(student);
		return "Registration Successful";
	}

	@Override
	public List<Appointment> getAllAppointmentsByUsername(String username) {
		// TODO Auto-generated method stub
		return newAppointmentRepo.findByUsername(username);
	}

	@Override
	public Student updateStudent(Student student, String username) {
		// TODO Auto-generated method stub
		Student st = studentRepo.findById(username).get();
		st.setBranch(student.getBranch());
		st.setName(student.getName());
		st.setPassword(student.getPassword());
		st.setUsername(student.getUsername());
		return studentRepo.save(st);
	}

}

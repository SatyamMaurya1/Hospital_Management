package com.product.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.product.backend.helper.LoginMessage;
import com.product.backend.model.Appointment;
import com.product.backend.model.LoginDetails;
import com.product.backend.model.Student;
import com.product.backend.model.StudentDTO;
import com.product.backend.service.AppointmentService;
import com.product.backend.service.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@Autowired
	private AppointmentService appointmentService;
	
	@PostMapping("/registration")
	public ResponseEntity<?> saveProduct(@RequestBody Student student){
		return new ResponseEntity<>(studentService.saveStudent(student), HttpStatus.CREATED);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getStudentByUsername(@PathVariable String id){
//		System.out.println(id);
		return new ResponseEntity<>(studentService.getStudent(id), HttpStatus.OK);
	}
	
//	@PostMapping("/updateProduct/{id}")
//	public ResponseEntity<?> updateProduct(@RequestBody Product product, @PathVariable Integer id){
//		return new ResponseEntity<>(productService.updateProduct(product, id),HttpStatus.CREATED);
//	}/
	
	@GetMapping("/appointments/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable String id){
		return new ResponseEntity<>(studentService.getAllAppointmentsByUsername(id),HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDetails loginDetails)
    {
        LoginMessage loginResponse = studentService.loginStudent(loginDetails);
        return ResponseEntity.ok(loginResponse);
    }
	
	
	@PostMapping("/newAppointment/{username}")
	public ResponseEntity<?> newAppointment(@RequestBody Appointment appointment, @PathVariable String username){
		Appointment newAppointment = appointmentService.saveNewAppointment(appointment, username);
		return ResponseEntity.ok(newAppointment);
	}
	
	@GetMapping("/appointment/{id}")
	public ResponseEntity<?> getAppointment(@PathVariable int id){
		Appointment app = appointmentService.getAppointmentById(id);
		Student st = studentService.getStudent(app.getUsername());
		StudentDTO stu = new StudentDTO();
		stu.setUsername(st.getUsername());
		stu.setRole(st.getRole());
		stu.setName(st.getName());
		stu.setAppointmentId(app.getAppointmentId());
		stu.setAppType(app.getAppType());
		stu.setAppDoctor(app.getAppDoctor());
		stu.setBranch(st.getBranch());
		stu.setDate(app.getDate());
		stu.setSlot(app.getSlot());
		return new ResponseEntity<>(stu, HttpStatus.OK);
	}
	
	@PostMapping("/setDate/{id}")
	public ResponseEntity<?> saveAppointment(@RequestBody Appointment appointment ,@PathVariable int id){
//		System.out.println(appointment);
		return new ResponseEntity<>(appointmentService.updateAppointmentDate(appointment, id), HttpStatus.CREATED);
	}
	
	@PostMapping("/setSlot/{id}")
	public ResponseEntity<?> updateAppointment(@RequestBody Appointment appointment ,@PathVariable int id){
//		System.out.println(appointment);
		return new ResponseEntity<>(appointmentService.updateAppointmentSlot(appointment, id), HttpStatus.CREATED);
	}
	
	@GetMapping("/getAppointment/{id}")
	public ResponseEntity<?> getAppointmentById(@PathVariable int id){
		return new ResponseEntity<>(appointmentService.getAppointmentById(id), HttpStatus.OK);
	}
	
}

package com.product.backend.service;

import java.util.List;

import com.product.backend.model.Appointment;

public interface AppointmentService {

	public List<Appointment> getAllAppointmentByUsername(String username);
	
	public Appointment saveNewAppointment(Appointment appointment, String username);
	
	public Appointment updateAppointmentDate(Appointment appointment,int id);
	
	public Appointment updateAppointmentSlot(Appointment appointment,int id);
	
	public Appointment getAppointmentById(int id);
}

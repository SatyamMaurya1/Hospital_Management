package com.product.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.backend.model.Appointment;
import com.product.backend.repository.NewAppointmentRepo;

@Service
public class AppointmentServiceImplements implements AppointmentService {

	@Autowired
	private NewAppointmentRepo newAppointmentRepo;
	
	@Override
	public List<Appointment> getAllAppointmentByUsername(String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Appointment saveNewAppointment(Appointment appointment, String username) {
		// TODO Auto-generated method stub
		appointment.setUsername(username);
		return newAppointmentRepo.save(appointment);
	}

	@Override
	public Appointment updateAppointmentDate(Appointment appointment, int id) {
		// TODO Auto-generated method stub
		Appointment appDetails = newAppointmentRepo.findById(id).get();
		appDetails.setDate(appointment.getDate());
		return newAppointmentRepo.save(appDetails);
	}

	@Override
	public Appointment updateAppointmentSlot(Appointment appointment, int id) {
		Appointment appDetails = newAppointmentRepo.findById(id).get();
		appDetails.setSlot(appointment.getSlot());
		return newAppointmentRepo.save(appDetails);
	}

	@Override
	public Appointment getAppointmentById(int id) {
		// TODO Auto-generated method stub
		return newAppointmentRepo.findById(id).get();
	}
}

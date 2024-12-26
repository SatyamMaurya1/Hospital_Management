package com.product.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product.backend.model.Appointment;

public interface NewAppointmentRepo extends JpaRepository<Appointment, Integer>{
	
	List<Appointment> findByUsername(String username);
}

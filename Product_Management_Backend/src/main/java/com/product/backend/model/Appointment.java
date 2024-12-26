package com.product.backend.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int appointmentId;
	private String appType;
	private String appDoctor;
	private Date date;
	private String slot;
	private String username;
	
	public int getAppointmentId() {
		return appointmentId;
	}
	
	public void setAppointmentId(int appointmentId) {
		this.appointmentId = appointmentId;
	}
	
	public String getAppType() {
		return appType;
	}
	
	public void setAppType(String appType) {
		this.appType = appType;
	}
	
	public String getAppDoctor() {
		return appDoctor;
	}
	
	public void setAppDoctor(String appDoctor) {
		this.appDoctor = appDoctor;
	}
	
	public Date getDate() {
		return date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	
	public String getSlot() {
		return slot;
	}
	
	public void setSlot(String slot) {
		this.slot = slot;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "Appointment [appointmentId=" + appointmentId + ", appType=" + appType + ", appDoctor=" + appDoctor
				+ ", date=" + date + ", slot=" + slot + ", username=" + username + "]";
	}
	
	
}

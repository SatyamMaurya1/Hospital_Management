package com.product.backend.model;

import java.util.Date;

public class StudentDTO {

	private String username;
	private String name;
	private String password;
	private String branch;
	private String profileImage;
	private String role;
	private int appointmentId;
	private String appType;
	private String appDoctor;
	private Date date;
	private String slot;
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getProfileImage() {
		return profileImage;
	}
	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
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
	@Override
	public String toString() {
		return "StudentDTO [username=" + username + ", name=" + name + ", password=" + password + ", branch=" + branch
				+ ", profileImage=" + profileImage + ", role=" + role + ", appointmentId=" + appointmentId
				+ ", appType=" + appType + ", appDoctor=" + appDoctor + ", date=" + date + ", slot=" + slot + "]";
	}
	
	
}

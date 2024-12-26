package com.product.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product.backend.model.Student;

public interface StudentRepo extends JpaRepository<Student, String>{


	public Student findByUsernameAndRole(String username, String role);
}

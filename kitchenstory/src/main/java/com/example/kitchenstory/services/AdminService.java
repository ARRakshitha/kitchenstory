package com.example.kitchenstory.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.kitchenstory.entities.AdminCred;
import com.example.kitchenstory.repo.AdminCredRepo;

@Service
public class AdminService {
	
	@Autowired
	private AdminCredRepo adminRepo;
	
	public void saveCred(AdminCred adminCred) {
		this.adminRepo.save(adminCred);
	}
	public AdminCred findAdmin(String username) {
		AdminCred admin = this.adminRepo.findByUsername(username);
		return admin;
	}

}

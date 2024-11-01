package com.example.bank_management_system.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bank_management_system.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, String> {
    User findByEmail(String email);
}

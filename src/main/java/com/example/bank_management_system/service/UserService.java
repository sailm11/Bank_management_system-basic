package com.example.bank_management_system.service;

import java.util.List;

import com.example.bank_management_system.model.User;

public interface UserService {

    public List<User> getAllUser();

    public User findUserProfileByJwt(String jwt);

    public User findUserByEmail(String email);

    public User findUserById(String userId);

    public List<User> findAllUsers();

}

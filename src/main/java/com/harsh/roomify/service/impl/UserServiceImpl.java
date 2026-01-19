package com.harsh.roomify.service.impl;

import com.harsh.roomify.enums.Role;
import com.harsh.roomify.model.User;
import com.harsh.roomify.repository.UserRepository;
import com.harsh.roomify.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    @Override
    public User registerUser(User user){
        user.setRole(Role.USER);
        return userRepository.save(user);
    }
}

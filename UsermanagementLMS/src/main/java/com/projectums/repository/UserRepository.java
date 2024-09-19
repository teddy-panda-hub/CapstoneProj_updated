package com.projectums.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectums.entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUsername(String username);
}


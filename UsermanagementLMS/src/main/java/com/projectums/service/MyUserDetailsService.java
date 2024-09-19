//package com.projectums.service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.projectums.entity.User;
//import com.projectums.repository.UserRepository;
//
//@Service
//public class MyUserDetailsService implements UserDetailsService {
//    @Autowired
//    private UserRepository repository;
//
//
//
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = repository.findByUsername(username);
//        List authorities=new ArrayList();
//        authorities.add(new SimpleGrantedAuthority(user.getRole()));
//        return new org.springframework.security.core.userdetails.User
//                (user.getUsername(), user.getPassword(), authorities);
//
////        return new org.springframework.security.core.userdetails.User
////                (user.getUsername(), user.getPassword());
//    }
//
//
//
//
//}

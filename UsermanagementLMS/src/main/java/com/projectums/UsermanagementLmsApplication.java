package com.projectums;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class UsermanagementLmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsermanagementLmsApplication.class, args);
	}

}

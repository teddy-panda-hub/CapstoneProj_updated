package com.iiht.registry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaregistryserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaregistryserviceApplication.class, args);
	}

}

package com.example.xe_khach_management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class XeKhachManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(XeKhachManagementApplication.class, args);
    }

}

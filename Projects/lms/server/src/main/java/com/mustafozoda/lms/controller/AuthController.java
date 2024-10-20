package com.mustafozoda.lms.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// AuthController.java
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final String TEST_USERNAME = "testuser";
    private final String TEST_PASSWORD = "testpassword";


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        // Check for valid username and password
        if (authRequest.getUsername().equals(TEST_USERNAME) &&
                authRequest.getPassword().equals(TEST_PASSWORD)) {
            return ResponseEntity.ok(new AuthResponse("fake-jwt-token", "user")); // Return role as 'user'
        }

        return ResponseEntity.status(401).body("Invalid username or password");
    }
}

class AuthRequest {
    private String username;
    private String password;

    // Getters and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

class AuthResponse {
    private String token;
    private String role; // Added role field

    public AuthResponse(String token, String role) {
        this.token = token;
        this.role = role; // Initialize role
    }

    public String getToken() {
        return token;
    }

    public String getRole() {
        return role; // Getter for role
    }
}

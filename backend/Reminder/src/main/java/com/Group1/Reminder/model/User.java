package com.Group1.Reminder.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String userId;
    private String email;
    private String phoneNumber;
    private String image;
    private String role;
    private String status;
}
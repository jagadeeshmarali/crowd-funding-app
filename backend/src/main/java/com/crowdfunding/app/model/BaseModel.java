package com.crowdfunding.app.model;

import org.springframework.data.annotation.Id;

public class BaseModel {
    @Id
    String uid;
    String createdAt;
    String updatedAt;
}

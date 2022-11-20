package com.crowdfunding.app.model;

import org.springframework.data.annotation.Id;

public class BaseModel {
    @Id
    String id;
    String createdAt;
    String updatedAt;
}

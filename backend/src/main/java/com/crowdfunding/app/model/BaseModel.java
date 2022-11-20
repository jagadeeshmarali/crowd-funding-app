package com.crowdfunding.app.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;
@Data
public class BaseModel {
    @Id
    String id;
    Date createdAt;
    Date updatedAt;
}

package com.crowdfunding.app.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document("project")
public class PROJECT extends BaseModel{
    String title;
    String description;
    String slug;
    String createdBy;
    String fundingGoal;
    double minBid;
    double launchDate;
    Integer campaignDuration;
    String imageUrl;
}

package com.crowdfunding.app.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document("project")
public class PROJECT extends BaseModel{
    String userId;
    String title;
    String description;
    String slug;
    double fundingGoal;
    double minBid;
    Date launchDate;
    Date campaignEndDate;
    String imageUrl;
    String createdBy;

}

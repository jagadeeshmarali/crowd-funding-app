package com.crowdfunding.app.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("reward")
public class Reward extends BaseModel{
    String projectId;
    String rewardedTo;
    String description;
}

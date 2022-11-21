package com.crowdfunding.app.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("transaction")
public class Transaction extends BaseModel{
    String userId;
    String projectId;
    String rewardId;
    double rewardAmount;
    boolean rewardStatus;
}

package com.crowdfunding.app.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("transaction")
public class Transaction extends BaseModel{
    String userId;
    ObjectId projectId;
    ObjectId rewardId;
    double rewardAmount;
    String projectTitle;
    String fromUserName;
    String fromUserImage;
    String projectImageUrl;
    String projectSlug;
    boolean rewardStatus;
}

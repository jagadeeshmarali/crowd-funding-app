package com.crowdfunding.app.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("userrequest")
public class UserRequest extends BaseModel {
    String description;
    double amount;
    String userId;
    ObjectId projectId;
    boolean approvalStatus;
    String fromUserName;
    String fromUserImage;
    String projectSlug;
}

package com.crowdfunding.app.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import io.opencensus.tags.propagation.TagContextTextFormat.Getter;

@Data
@Document("reward")
public class Reward extends BaseModel{
    ObjectId projectId;
    String userId;
    Double rewardAmount;
    String description;


}

package com.crowdfunding.app.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import io.opencensus.tags.propagation.TagContextTextFormat.Getter;

@Data
@Document("reward")
public class Reward extends BaseModel{
    String projectId;
    Double rewardAmount;
    String description;


}

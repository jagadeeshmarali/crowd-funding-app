package com.crowdfunding.app.model;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import io.opencensus.tags.propagation.TagContextTextFormat.Getter;


@Document("reward")
public class Reward extends BaseModel{
    ObjectId projectId;
     String userId;
   
    Double rewardAmount;
    String description;
    public Reward(ObjectId projectId, String userId, Double rewardAmount, String description) {
        this.projectId = projectId;
        this.userId = userId;
        this.rewardAmount = rewardAmount;
        this.description = description;
    }
    public ObjectId getProjectId() {
        return projectId;
    }
    public void setProjectId(ObjectId projectId) {
        this.projectId = projectId;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public Double getRewardAmount() {
        return rewardAmount;
    }
    public void setRewardAmount(Double rewardAmount) {
        this.rewardAmount = rewardAmount;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }


}

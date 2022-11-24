package com.crowdfunding.app.model;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;


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
    
    public Transaction(String userId, ObjectId projectId, ObjectId rewardId, double rewardAmount, String projectTitle,
            String fromUserName, String fromUserImage, String projectImageUrl, String projectSlug,
            boolean rewardStatus) {
        this.userId = userId;
        this.projectId = projectId;
        this.rewardId = rewardId;
        this.rewardAmount = rewardAmount;
        this.projectTitle = projectTitle;
        this.fromUserName = fromUserName;
        this.fromUserImage = fromUserImage;
        this.projectImageUrl = projectImageUrl;
        this.projectSlug = projectSlug;
        this.rewardStatus = rewardStatus;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public ObjectId getProjectId() {
        return projectId;
    }
    public void setProjectId(ObjectId projectId) {
        this.projectId = projectId;
    }
    public ObjectId getRewardId() {
        return rewardId;
    }
    public void setRewardId(ObjectId rewardId) {
        this.rewardId = rewardId;
    }
    public double getRewardAmount() {
        return rewardAmount;
    }
    public void setRewardAmount(double rewardAmount) {
        this.rewardAmount = rewardAmount;
    }
    public String getProjectTitle() {
        return projectTitle;
    }
    public void setProjectTitle(String projectTitle) {
        this.projectTitle = projectTitle;
    }
    public String getFromUserName() {
        return fromUserName;
    }
    public void setFromUserName(String fromUserName) {
        this.fromUserName = fromUserName;
    }
    public String getFromUserImage() {
        return fromUserImage;
    }
    public void setFromUserImage(String fromUserImage) {
        this.fromUserImage = fromUserImage;
    }
    public String getProjectImageUrl() {
        return projectImageUrl;
    }
    public void setProjectImageUrl(String projectImageUrl) {
        this.projectImageUrl = projectImageUrl;
    }
    public String getProjectSlug() {
        return projectSlug;
    }
    public void setProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
    }
    public boolean isRewardStatus() {
        return rewardStatus;
    }
    public void setRewardStatus(boolean rewardStatus) {
        this.rewardStatus = rewardStatus;
    }
}

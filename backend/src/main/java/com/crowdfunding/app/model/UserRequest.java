package com.crowdfunding.app.model;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;


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
    
    public UserRequest(String description, double amount, String userId, ObjectId projectId, boolean approvalStatus,
            String fromUserName, String fromUserImage, String projectSlug) {
        this.description = description;
        this.amount = amount;
        this.userId = userId;
        this.projectId = projectId;
        this.approvalStatus = approvalStatus;
        this.fromUserName = fromUserName;
        this.fromUserImage = fromUserImage;
        this.projectSlug = projectSlug;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public double getAmount() {
        return amount;
    }
    public void setAmount(double amount) {
        this.amount = amount;
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
    public boolean isApprovalStatus() {
        return approvalStatus;
    }
    public void setApprovalStatus(boolean approvalStatus) {
        this.approvalStatus = approvalStatus;
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
    public String getProjectSlug() {
        return projectSlug;
    }
    public void setProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
    }
}

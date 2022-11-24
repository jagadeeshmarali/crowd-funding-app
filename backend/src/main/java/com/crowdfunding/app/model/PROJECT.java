package com.crowdfunding.app.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;


@Document("project")
public class PROJECT extends BaseModel{
    

    String userId;
    String title;
    String description;
    String slug;
    double fundingGoal;
    Date launchDate;
    Date campaignEndDate;
    String imageUrl;
    String createdBy;

    public PROJECT(String userId, String title, String description, String slug, double fundingGoal, Date launchDate,
            Date campaignEndDate, String imageUrl, String createdBy) {
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.slug = slug;
        this.fundingGoal = fundingGoal;
        this.launchDate = launchDate;
        this.campaignEndDate = campaignEndDate;
        this.imageUrl = imageUrl;
        this.createdBy = createdBy;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public double getFundingGoal() {
        return fundingGoal;
    }

    public void setFundingGoal(double fundingGoal) {
        this.fundingGoal = fundingGoal;
    }

    public Date getLaunchDate() {
        return launchDate;
    }

    public void setLaunchDate(Date launchDate) {
        this.launchDate = launchDate;
    }

    public Date getCampaignEndDate() {
        return campaignEndDate;
    }

    public void setCampaignEndDate(Date campaignEndDate) {
        this.campaignEndDate = campaignEndDate;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }



}

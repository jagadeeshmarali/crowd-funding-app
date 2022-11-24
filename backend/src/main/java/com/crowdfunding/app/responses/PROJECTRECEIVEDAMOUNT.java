package com.crowdfunding.app.responses;

import java.util.Date;

import com.crowdfunding.app.model.PROJECT;



public class PROJECTRECEIVEDAMOUNT extends PROJECT{
    double amountReceived;

    

    public PROJECTRECEIVEDAMOUNT(String userId, String title, String description, String slug, double fundingGoal,
            Date launchDate, Date campaignEndDate, String imageUrl, String createdBy, double amountReceived) {
        super(userId, title, description, slug, fundingGoal, launchDate, campaignEndDate, imageUrl, createdBy);
        this.amountReceived = amountReceived;
    }
    public double getAmountReceived() {
        return amountReceived;
    }

    public void setAmountReceived(double amountReceived) {
        this.amountReceived = amountReceived;
    }
}

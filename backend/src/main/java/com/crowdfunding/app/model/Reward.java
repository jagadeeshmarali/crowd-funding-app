package com.crowdfunding.app.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import io.opencensus.tags.propagation.TagContextTextFormat.Getter;

@Data
@Document("reward")
public class Reward extends BaseModel{
    String rewardId;
    String projectId;
    String rewardedTo;
    String description;
    public Reward(String uid, String createdAt, String updatedAt, String projectId, String rewardedTo,
            String description) {
        super(uid, createdAt, updatedAt);
        this.projectId = projectId;
        this.rewardedTo = rewardedTo;
        this.description = description;
    }

    public String getprojectId() //getter
    {
        return getprojectId();
    }

    public String getrewardedto()
    {
        return getrewardedto();
    }

    public String getDescription()
    {
        return getDescription();
    }

    


    
   

   
   

}

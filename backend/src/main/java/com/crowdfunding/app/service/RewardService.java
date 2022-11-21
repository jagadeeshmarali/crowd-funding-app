package com.crowdfunding.app.service;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.model.Reward;
import com.crowdfunding.app.repository.RewardRepo;
import com.crowdfunding.app.utils.Slug;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class RewardService {
    private final RewardRepo rewardRepo;

    @Autowired
    private SecurityService securityService;
    @Autowired
    MongoTemplate mongoTemplate;
    public List<Reward> getList(){

        return rewardRepo.findAll();
    }


    public Reward createReward(Reward reward){
        reward.setUserId(securityService.getUser().getUid());
        reward.setProjectId(new ObjectId(reward.getProjectId().toString()));
        reward.setCreatedAt(new Date());
        reward.setUpdatedAt(new Date());
        return rewardRepo.save(reward);
    }

    public void deleteReward(String rewardId){
        rewardRepo.deleteById(rewardId);
    }

    public Optional<Reward> getReward(String uid) {
        return rewardRepo.findById(uid);
    }

    public Reward updateReward(Reward payload, String projectId, String rewardId) {
        Query query = new Query();

        query.addCriteria(Criteria.where("userId").is(securityService.getUser().getUid()));
        query.addCriteria(Criteria.where("projectId").is(projectId));
        query.addCriteria(Criteria.where("_id").is(rewardId));
        Reward reward = mongoTemplate.findOne(query,Reward.class);
        reward.setDescription(payload.getDescription());
        mongoTemplate.save(reward);

        return mongoTemplate.findOne(query, Reward.class);
    }
}

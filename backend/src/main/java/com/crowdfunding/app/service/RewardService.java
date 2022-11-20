package com.crowdfunding.app.service;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.model.Reward;
import com.crowdfunding.app.repository.RewardRepo;
import com.crowdfunding.app.utils.Slug;
import lombok.AllArgsConstructor;
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


    public Reward createReward(Reward reward, String projectId){
        reward.setId(securityService.getUser().getUid() + UUID.randomUUID().toString());
        reward.setProjectId(projectId);
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

    public Reward updateReward(Reward payload, String projectId) {
        Query query = new Query();
        //Add criteria
        //query.addCriteria(Criteria.where("user_id").is(securityService.getUser().getUid()));
        //query.addCriteria(Criteria.where("_id").is(id));

        Reward reward = mongoTemplate.findOne(query,Reward.class);
        reward.setDescription(payload.getDescription());
        reward.setRewardAmount(payload.getRewardAmount());

        mongoTemplate.save(reward);
        return mongoTemplate.findOne(query, Reward.class);
    }
}

package com.crowdfunding.app.repository;

import com.crowdfunding.app.model.Reward;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RewardRepo extends MongoRepository<Reward, String> {

}

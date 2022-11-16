package com.crowdfunding.app.service;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.model.Reward;
import com.crowdfunding.app.repository.RewardRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RewardService {
    private final RewardRepo rewardRepo;
    public List<Reward> getList(){
        return rewardRepo.findAll();
    }

    public void createReward(Reward reward){
        rewardRepo.save(reward);
    }

    public void deleteReward(String uid){
        rewardRepo.deleteById(uid);
    }

    public Optional<Reward> getReward(String uid) {
        return rewardRepo.findById(uid);
    }

    public void updateReward(Reward reward) {
        rewardRepo.save(reward);
    }
}

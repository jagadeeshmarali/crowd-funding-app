package com.crowdfunding.app.controller;


import com.crowdfunding.app.model.Reward;
import com.crowdfunding.app.service.RewardService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class RewardController {
    @Autowired
    RewardService rewardService;

    @RequestMapping(value = "/reward-create", method = RequestMethod.POST)
    public Reward createReward(@RequestBody Reward reward){
        return rewardService.createReward(reward);
    }

    @GetMapping(value = "/reward-list")
    public List<Reward> getRewards(){
        return rewardService.getList();
    }

    @GetMapping(value = "/reward-list-by-project")
    public List<Reward> getRewardByProjectId(String id){
        return rewardService.getRewardByProjectId(id);
    }
}

package com.crowdfunding.app.controller;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.model.Reward;
import com.crowdfunding.app.model.Transaction;
import com.crowdfunding.app.model.auth.User;
import com.crowdfunding.app.service.ProjectService;
import com.crowdfunding.app.service.RewardService;
import com.crowdfunding.app.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class PrivateEndpoint {
    @GetMapping("user-details")
    public ResponseEntity<User> getUserInfo(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user);
    }

}

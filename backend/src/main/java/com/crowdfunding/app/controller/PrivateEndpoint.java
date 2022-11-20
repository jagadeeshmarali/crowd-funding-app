package com.crowdfunding.app.controller;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.model.auth.User;
import com.crowdfunding.app.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("private")
public class PrivateEndpoint {
    @Autowired
    ProjectService projectService;

    @GetMapping("user-details")
    public ResponseEntity<User> getUserInfo(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user);
    }

    @DeleteMapping(value = "/project-delete")
    ResponseEntity<String> deleteProject(String project_uid) {
        projectService.deleteProject(project_uid);
        return ResponseEntity.ok("OK");
    }

    @RequestMapping(value = "/project-create", method = RequestMethod.POST)
    ResponseEntity<String> createProject(PROJECT project){
        projectService.createProject(project);
        return ResponseEntity.ok("OK"); }


}

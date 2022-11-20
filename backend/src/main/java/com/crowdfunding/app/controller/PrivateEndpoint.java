package com.crowdfunding.app.controller;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.model.auth.User;
import com.crowdfunding.app.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("private")
public class PrivateEndpoint {
    @Autowired
    ProjectService projectService;

    @GetMapping("user-details")
    public ResponseEntity<User> getUserInfo(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user);
    }

    @RequestMapping(value = "/project-create", method = RequestMethod.POST)
    public PROJECT createProject(@RequestBody PROJECT project){
        return projectService.createProject(project);
    }
    @GetMapping("/get_all_projects")
    public List<PROJECT> getAllProjects(){
        return projectService.getList();
    }
    @GetMapping("/get_my_projects")
    public List<PROJECT> getMyProjects(){
        return projectService.getMyProjects();
    }

    @GetMapping("/get_project_by_slug")
    public PROJECT getProjectBySlug(String slug){
        return projectService.getProjectBySlug(slug);
    }

    @DeleteMapping(value = "/project-delete")
    ResponseEntity<String> deleteProject(String project_uid) {
        projectService.deleteProject(project_uid);
        return ResponseEntity.ok("OK");
    }

}

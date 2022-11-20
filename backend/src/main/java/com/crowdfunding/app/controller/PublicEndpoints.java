package com.crowdfunding.app.controller;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("public")
public class PublicEndpoints {
    @Autowired
    ProjectService projectService;

    @GetMapping("test")
    ResponseEntity<String> getPublic() {
        return ResponseEntity.ok("OK");
    }
    @RequestMapping(value = "/project-create", method = RequestMethod.POST)
    ResponseEntity<String> createProject(PROJECT project){
        projectService.createProject(project);
        return ResponseEntity.ok("OK"); }
}

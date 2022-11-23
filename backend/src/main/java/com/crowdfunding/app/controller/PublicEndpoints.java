package com.crowdfunding.app.controller;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.responses.PROJECTRECEIVEDAMOUNT;
import com.crowdfunding.app.service.ProjectService;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("public")
public class PublicEndpoints {
    @Autowired
    ProjectService projectService;

    @GetMapping("test")
    ResponseEntity<String> getPublic() {
        return ResponseEntity.ok("OK");
    }
    @GetMapping("test/1")
    public Document getPublic1() {
        return projectService.getListByIds();
    }
    @RequestMapping(value = "/project-create", method = RequestMethod.POST)
    ResponseEntity<String> createProject(PROJECT project){
        projectService.createProject(project);
        return ResponseEntity.ok("OK"); }
}

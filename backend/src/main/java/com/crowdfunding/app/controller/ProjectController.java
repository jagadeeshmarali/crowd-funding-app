package com.crowdfunding.app.controller;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.service.ProjectService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@AllArgsConstructor
public class ProjectController {
    ProjectService projectService;
    @SchemaMapping(typeName = "Query", field = "get_project_list")
    public List<PROJECT> get_project_list(){
    return projectService.getList();
    }

}

package com.crowdfunding.app.service;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.repository.ProjectRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProjectService {
    private final ProjectRepo projectRepo;
    @Autowired
    private SecurityService securityService;
    public List<PROJECT> getList(){
        return projectRepo.findAll();
    }

    public void createProject(PROJECT project){

        project.setUserId(securityService.getUser().getUid());
        projectRepo.save(project);
    }

    public void deleteProject(String project_uid){
        projectRepo.deleteById(project_uid);
    }

    public Optional<PROJECT> getProject(String uid) {
        return projectRepo.findById(uid);
    }

}

package com.crowdfunding.app.service;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.repository.ProjectRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProjectService {
    private final ProjectRepo projectRepo;
    public List<PROJECT> getList(){
        return projectRepo.findAll();
    }

    public void createProject(PROJECT project){
        projectRepo.save(project);
    }

    public void deleteProject(String uid){
         projectRepo.deleteById(uid);
    }

    public Optional<PROJECT> getProject(String uid) {
        return projectRepo.findById(uid);
    }

    public void updateProject(PROJECT project) {
        projectRepo.save(project);
    }

}

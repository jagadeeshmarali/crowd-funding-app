package com.crowdfunding.app.service;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.repository.ProjectRepo;
import com.crowdfunding.app.utils.Slug;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProjectService {
    private final ProjectRepo projectRepo;

    @Autowired
    private MongoTemplate mt;
    @Autowired
    private SecurityService securityService;
    public List<PROJECT> getList(){
        return projectRepo.findAll(
                Sort.by(Sort.Direction.DESC,"updatedAt")
        );
    }

    public PROJECT createProject(PROJECT project){
        Slug slugutil = new Slug();
        project.setSlug(slugutil.toSlug(project.getTitle()));
        project.setUserId(securityService.getUser().getUid());
        project.setCreatedBy(securityService.getUser().getName());
        project.setCreatedAt(new Date());
        project.setUpdatedAt(new Date());
        return projectRepo.save(project);
    }

    public void deleteProject(String id){
         projectRepo.deleteById(id);
    }

    public Optional<PROJECT> getProject(String uid) {
        return projectRepo.findById(uid);
    }

    public PROJECT update(String id, PROJECT payload){
        Query query = new Query();
        query.addCriteria(Criteria.where("userId").is(securityService.getUser().getUid()));
        query.addCriteria(Criteria.where("_id").is(id));
        PROJECT project = mt.findOne(query,PROJECT.class);
        project.setDescription(payload.getDescription());
        project.setFundingGoal(payload.getFundingGoal());
        project.setLaunchDate(payload.getLaunchDate());
        project.setCampaignEndDate(payload.getCampaignEndDate());
        mt.save(project);
        return mt.findOne(query, PROJECT.class);
    }
    public List<PROJECT> getMyProjects(){
        Query query = new Query();
        query.addCriteria(Criteria.where("userId").is(securityService.getUser().getUid()));
        return mt.find(query,PROJECT.class);
    }

    public PROJECT getProjectBySlug(String slug){
        Query query = new Query();
        query.addCriteria(Criteria.where("slug").is(slug));
        return mt.findOne(query,PROJECT.class);
    }

}

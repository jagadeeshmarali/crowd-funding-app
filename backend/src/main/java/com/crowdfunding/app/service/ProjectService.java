package com.crowdfunding.app.service;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.repository.ProjectRepo;
import com.crowdfunding.app.responses.PROJECTRECEIVEDAMOUNT;
import com.crowdfunding.app.utils.CustomAggregationOperation;
import com.crowdfunding.app.utils.Slug;
import lombok.AllArgsConstructor;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
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
    public Document getListByIds(){
        String query="{\n" +
                "    '$match': {\n" +
                "      'userId': 'ToA3Hu4jevONRUIUHl8F1eLXav52'\n" +
                "    }\n" +
                "  }, {\n" +
                "    '$group': {\n" +
                "      '_id': null, \n" +
                "      'projects': {\n" +
                "        '$addToSet': '$projectId'\n" +
                "      }\n" +
                "    }\n" +
                "  }, {\n" +
                "    '$unwind': {\n" +
                "      'path': '$projects'\n" +
                "    }\n" +
                "  }, {\n" +
                "    '$lookup': {\n" +
                "      'from': 'project', \n" +
                "      'localField': 'projects', \n" +
                "      'foreignField': '_id', \n" +
                "      'as': 'result'\n" +
                "    }\n" +
                "  }, {\n" +
                "    '$unwind': {\n" +
                "      'path': '$result'\n" +
                "    }\n" +
                "  }, {\n" +
                "    '$project': {\n" +
                "      '_id': '$result._id', \n" +
                "      'title': '$result.title', \n" +
                "      'description': '$result.description', \n" +
                "      'slug': '$result.slug', \n" +
                "      'fundingGoal': '$result.fundingGoal', \n" +
                "      'imageUrl': '$result.imageUrl', \n" +
                "      'createdBy': '$result.createdBy', \n" +
                "      'campaignEndDate': '$result.campaignEndDate'\n" +
                "    }\n" +
                "  }";
        Aggregation aggregation = Aggregation.newAggregation(new CustomAggregationOperation(query));
        AggregationResults <Document> results = mt.aggregate(aggregation, "transaction",Document.class);
        System.out.println(results.getMappedResults());
        return  results.getRawResults();
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
    public  List <Document> getProjectAmountList(){
        String query = "{\n" +
                "    '$lookup': {\n" +
                "      'from': 'transaction', \n" +
                "      'localField': '_id', \n" +
                "      'foreignField': 'projectId', \n" +
                "      'as': 'result'\n" +
                "    }\n" +
                "  }, {\n" +
                "    '$project': {\n" +
                "      'receivedrewardAmount': {\n" +
                "        '$sum': '$result.rewardAmount'\n" +
                "      }, \n" +
                "      'userId': 1, \n" +
                "      'title': 1, \n" +
                "      'description': 1, \n" +
                "      'slug': 1, \n" +
                "      'fundingGoal': 1, \n" +
                "      'launchDate': 1, \n" +
                "      'campaignEndDate': 1, \n" +
                "      'imageUrl': 1, \n" +
                "      'createdBy': 1\n" +
                "    }\n" +
                "  }";
        Aggregation aggregation = Aggregation.newAggregation(new CustomAggregationOperation(query));
        AggregationResults <Document> results = mt.aggregate(aggregation, "project",Document.class);
        System.out.println(results.getMappedResults());
        return results.getMappedResults();
    }


}

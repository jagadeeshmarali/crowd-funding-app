package com.crowdfunding.app.service;
import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.model.UserRequest;
import com.crowdfunding.app.repository.UserRequestRepo;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class UserRequestService {
    private final UserRequestRepo userRequestRepo;

    @Autowired
    private MongoTemplate mt;
    @Autowired
    private SecurityService securityService;
    public List<UserRequest> getList(){
        return userRequestRepo.findAll(
                Sort.by(Sort.Direction.DESC,"updatedAt")
        );
    }

    public UserRequest createRequest(UserRequest userRequest){
        userRequest.setProjectId(new ObjectId(userRequest.getProjectId().toString()));
        userRequest.setUserId(securityService.getUser().getUid());
        userRequest.setFromUserName(securityService.getUser().getName());
        userRequest.setFromUserImage(securityService.getUser().getPicture());
        userRequest.setCreatedAt(new Date());
        userRequest.setUpdatedAt(new Date());
        return userRequestRepo.save(userRequest);
    }

    public UserRequest updateRequest(String id,boolean status){
        Query query = new Query();
//        query.addCriteria(Criteria.where("userId").is(securityService.getUser().getUid()));
        query.addCriteria(Criteria.where("_id").is(new ObjectId(id)));
        UserRequest userRequest = mt.findOne(query,UserRequest.class);
        userRequest.setApprovalStatus(status);
        userRequest.setUpdatedAt(new Date());
        mt.save(userRequest);
        return mt.findOne(query, UserRequest.class);
    }
}

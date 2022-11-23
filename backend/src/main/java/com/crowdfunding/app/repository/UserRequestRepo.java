package com.crowdfunding.app.repository;

import com.crowdfunding.app.model.Transaction;
import com.crowdfunding.app.model.UserRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRequestRepo extends MongoRepository<UserRequest, String>{

}
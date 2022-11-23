package com.crowdfunding.app.repository;

import com.crowdfunding.app.model.PROJECT;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ProjectRepo extends MongoRepository<PROJECT, String> {
    @Query(value = "{ '_id' : {'$in' : ?0 } }")
    List<PROJECT> findAllProjects(List<String> ids);
}

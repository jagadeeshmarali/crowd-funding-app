package com.crowdfunding.app.repository;

import com.crowdfunding.app.model.PROJECT;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepo extends MongoRepository<PROJECT, String> {
}

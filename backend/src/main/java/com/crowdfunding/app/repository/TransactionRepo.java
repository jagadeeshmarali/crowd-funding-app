package com.crowdfunding.app.repository;

import com.crowdfunding.app.model.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TransactionRepo extends MongoRepository<Transaction, String>{

}

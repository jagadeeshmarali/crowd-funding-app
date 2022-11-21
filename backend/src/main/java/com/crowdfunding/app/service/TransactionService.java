package com.crowdfunding.app.service;

import com.crowdfunding.app.model.Transaction;
import com.crowdfunding.app.repository.TransactionRepo;
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
public class TransactionService {
    private final TransactionRepo transactionRepo;

    @Autowired
    private MongoTemplate mt;
    @Autowired
    private SecurityService securityService;
    public List<Transaction> getList(){
        return transactionRepo.findAll(
                Sort.by(Sort.Direction.DESC,"updatedAt")
        );
    }

    public Transaction createTransaction(Transaction transaction){
        transaction.setUserId(securityService.getUser().getUid());
        transaction.setCreatedAt(new Date());
        transaction.setUpdatedAt(new Date());
        return transactionRepo.save(transaction);
    }

//    public void deleteTransaction(String id){
//        transactionRepo.deleteById(id);
//    }

    public Optional<Transaction> getTransaction(String uid) {
        return transactionRepo.findById(uid);
    }

    public List<Transaction> getUserTransactions(String userId){
        Query query = new Query();
        query.addCriteria(Criteria.where("userId").is(securityService.getUser().getUid()));
        return mt.find(query,Transaction.class);
    }

    public List<Transaction> getProjectTransactions(String userId, String projectId){
        Query query = new Query();
        query.addCriteria(Criteria.where("userId").is(securityService.getUser().getUid()));
        query.addCriteria(Criteria.where("projectId").is(projectId));
        return mt.find(query,Transaction.class);
    }

}


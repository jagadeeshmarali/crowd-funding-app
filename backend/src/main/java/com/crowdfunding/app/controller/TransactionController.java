package com.crowdfunding.app.controller;

import com.crowdfunding.app.model.Transaction;
import com.crowdfunding.app.service.TransactionService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class TransactionController {
    @Autowired
    TransactionService transactionService;

    @RequestMapping(value = "/transaction-create", method = RequestMethod.POST)
    public Transaction createTransaction(@RequestBody Transaction transaction){
        return transactionService.createTransaction(transaction);
    }

    @GetMapping("/get-user-transactions")
    public List<Transaction> getUserTransactions(){
        return transactionService.getUserTransactions();
    }

    @GetMapping("/get-project-transactions")
    public List<Transaction> getProjectTransactions(String projectId){
        return transactionService.getProjectTransactions(projectId);
    }
}

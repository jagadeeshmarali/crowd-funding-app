package com.crowdfunding.app.controller;

import com.crowdfunding.app.model.PROJECT;
import com.crowdfunding.app.model.UserRequest;
import com.crowdfunding.app.service.UserRequestService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class UserRequestController {
    @GetMapping("/get_all_requests")
    public List<UserRequest> getAllRequests(){
        return userRequestService.getList();
    }
    @Autowired
    UserRequestService userRequestService;
    @RequestMapping(value = "/user-request-create", method = RequestMethod.POST)
    public UserRequest createUserRequest(@RequestBody UserRequest userRequest){
        return userRequestService.createRequest(userRequest);
    }
    @Data
    private class Request{
        String id;
        boolean status;
    }
    @RequestMapping(value = "/update/user-request", method = RequestMethod.POST)
    public UserRequest updateUserRequest(String id){
        return userRequestService.updateRequest(id,true);
    }
}

package com.crowdfunding.app.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document("project")
public class PROJECT {
    @Id
    private String id;
    private String name;
    private Integer funding_amount;
    private Integer max_bits;
    private Date dead_line;
    private List<String> tags;
}

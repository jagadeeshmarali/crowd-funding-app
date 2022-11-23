package com.crowdfunding.app.responses;

import com.crowdfunding.app.model.PROJECT;
import lombok.Data;

@Data
public class PROJECTRECEIVEDAMOUNT extends PROJECT{
    double amountReceived;
}

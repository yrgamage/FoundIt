package com.ijse.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data

public class LostItemModel {
    @Id
    private Integer lostItemId;

    private String lostItemName;
    private Date lostItemDate;
    private String location;
    private String owner;
    private String contact;
    private String status;

}

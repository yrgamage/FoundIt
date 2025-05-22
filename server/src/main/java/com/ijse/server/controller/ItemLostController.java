package com.ijse.server.controller;

import com.ijse.server.model.LostItemModel;
import com.ijse.server.repo.LostItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/lost")



public class ItemLostController {

    @Autowired
    LostItemRepo lostItemRepo;

    @PostMapping("/addItem")
    public void lost(@RequestBody LostItemModel LostItem) {
        lostItemRepo.save(LostItem);
    }

}

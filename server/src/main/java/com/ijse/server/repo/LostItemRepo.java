package com.ijse.server.repo;

import com.ijse.server.model.LostItemModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LostItemRepo extends MongoRepository<LostItemModel,Integer> {


}

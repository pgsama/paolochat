package app.ws.chatapp.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import app.ws.chatapp.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findByUsername(String username);
    Optional<User> findById(String id);
    
}

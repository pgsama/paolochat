package app.ws.chatapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import app.ws.chatapp.model.Chat;

@Repository
public interface ChatRepository  extends MongoRepository<Chat, String> {
    
    Chat findByOwner(String owner);
    Optional<Chat> findBy_id(String _id);
    
}

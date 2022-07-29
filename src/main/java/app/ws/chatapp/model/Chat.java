package app.ws.chatapp.model;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.Email;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
public class Chat {
    
    @Id
    private String _id;
    @Field 
    private String owner = "none";
    @Field
    private List <ChatMessage> messages = new ArrayList<>();

    public Chat(String _id, List<ChatMessage> messages) {
        this._id = _id;
        this.messages = messages;
    }

    public String get_id() {
        return _id;
    }
    public void set_id(String _id) {
        this._id = _id;
    }
    public List<ChatMessage> getMessages() {
        return messages;
    }
    public void setMessages(List<ChatMessage> messages) {
        this.messages = messages;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    
    
}

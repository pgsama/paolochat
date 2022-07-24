package app.ws.chatapp.model;
import java.io.Serializable;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


public class Contact {


    private String username;

    
    
    public Contact(String username) {
        this.username = username;
    }


    public Contact() {
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}

package app.ws.chatapp.handler;

import java.nio.file.attribute.UserPrincipal;
import java.security.Principal;
import java.util.Map;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;

public class UserHandler extends DefaultHandshakeHandler {

    private final Logger logger = LoggerFactory.getLogger(UserHandler.class);

    @Override
    protected Principal determineUser(ServerHttpRequest request, WebSocketHandler wsHandler,
            Map<String, Object> attributes) {

                String randomId = UUID.randomUUID().toString();

                logger.info("User Connected as Random ID: " + randomId);
        
        return new UserPrincipal()
        {
            @Override
            public String getName()
            {
                return randomId;
            }
        };
        
        };
    

    
    
}

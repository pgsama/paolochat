package app.ws.chatapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

import app.ws.chatapp.model.ChatMessage;
import app.ws.chatapp.model.User;
import app.ws.chatapp.repository.UserRepository;

@CrossOrigin("*")
@Controller
public class ChatController {


	@Autowired
	UserRepository userRepository;

	// @MessageMapping("/chat.register")
	// @SendTo("/topic/public")
	// public ChatMessage register(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
	// 	headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
	// 	return chatMessage;
	// }

	// @MessageMapping("/chat.send")
	// @SendTo("/topic/public")
	// public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {
	// 	return chatMessage;
	// }

	
	@MessageMapping("/chat.register/{username}")
	@SendTo("/topic/private/{username}")
	public ChatMessage privateRegister(@Payload ChatMessage chatMessage,
	SimpMessageHeaderAccessor headerAccessor,
	@PathVariable("username") String username) {

		headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
		return chatMessage;
	}

	@MessageMapping("/chat.send/{username}")
	@SendTo("/topic/private/{username}")
	public ChatMessage sendPrivateMessage(@Payload ChatMessage chatMessage,
	@PathVariable("username") String username) {

		return chatMessage;
	}



}

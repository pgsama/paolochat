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

	@MessageMapping("/chat.register")
	@SendTo("/topic/public")
	public ChatMessage register(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
		return chatMessage;
	}

	@MessageMapping("/chat.send")
	@SendTo("/topic/public")
	public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {
		return chatMessage;
	}

	@GetMapping("/")
    public ModelAndView home() {
        return new ModelAndView("index")
                .addObject("user", new User());
    }

	@GetMapping("/window/{id}")
    public ModelAndView home2(@PathVariable("id") String id) {
		return new ModelAndView("window")
				.addObject("id", id);
	}
	//same for demo
	@GetMapping("/demo")
	public ModelAndView home3() {
		return new ModelAndView("demo")
				.addObject("user", new User());
	}
}

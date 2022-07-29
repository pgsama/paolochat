package app.ws.chatapp.control;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import app.ws.chatapp.model.User;

@CrossOrigin("*")
@Controller
public class appController {

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

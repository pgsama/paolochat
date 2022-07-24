package app.ws.chatapp.control;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class appController {

    @RequestMapping("/index")
    public String getApp() {
        return "app";
    }
    
}

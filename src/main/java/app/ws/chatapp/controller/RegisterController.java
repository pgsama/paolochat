package app.ws.chatapp.controller;

import java.util.*;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import app.ws.chatapp.model.Contact;
import app.ws.chatapp.model.User;
import app.ws.chatapp.repository.UserRepository;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin("*")
@RestController
public class RegisterController {
    
    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/register")
    public void getemail(@Valid @ModelAttribute("user") User user, BindingResult result, Model model) {
        if (result.hasErrors()) {
          System.out.println(result.toString());
          System.out.println(user.toString());
        } else {
          if (user.getUsername() != null && user.getPassword() != null && user.getEmail() != null && user.getPhone() != null) {
            userRepository.save(user);
            System.out.println(user.toString());
          } else {
            System.out.println("error");
          }
        }
      }

    @GetMapping("/api/alluser")
    public Iterable<User> getAllUser() {
        return userRepository.findAll();
    }

    @GetMapping("/api/user/{id}")
    public User getUser(@PathVariable("id") String id) {
      User user = null;

      try{

       user = userRepository.findById(id).get();

      }catch(Exception e){
        System.out.println("USER NOT FOUND");
      }

       if(user != null){
        System.out.println("ID ES IGUAL");
       }
       else
       {
        user = userRepository.findByUsername(id);
       }
       return user;
    }
    
    //postmapping save user
    @PostMapping("/api/saveuser")
    public User saveUser(@RequestBody User user) {
        userRepository.save(user);
        return user;
      }

    @DeleteMapping("/api/delete")
    public void deleteAllUsers() {
        userRepository.deleteAll();
    }

    @DeleteMapping("/api/user/{id}")
    public void deleteUser(@PathVariable("id") String id) {
        userRepository.deleteById(id);
    }

    @PostMapping("/postuserTest")
    public User postUserTest() {
        List<Contact> contacts = new ArrayList<Contact>();
        contacts.add(new Contact("prueba12"));
        contacts.add(new Contact("falcon"));
        contacts.add(new Contact("herbert"));
        contacts.add(new Contact("paolo"));
        User user = new User();
        user.setUsername("prueba100");
        user.setContacts(contacts);
        userRepository.save(user);
        return user;
    }

    @PutMapping(value="api/updateuser/{id}")
    public User updateUser(@PathVariable String id, @RequestBody User user) {
        return userRepository.save(user);
    }

}

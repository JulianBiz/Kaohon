package com.julian.kaohon

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

@Controller
@RequestMapping("/demo")
class MainController {
    @Autowired
    private lateinit var userRepository : UserRepository

    @PostMapping("/add")
    @ResponseBody fun AddNewUser(@RequestParam name : String, @RequestParam email : String) : String {
        var user = User()
        user.setName(name)
        user.setEmail(email)
        userRepository.save(user)
        return "Saved!\nUser: " + name + " | Email: " + email + "\n"
    }

    @GetMapping("/all")
    @ResponseBody fun GetAllUsers() : Iterable<User> {
        return userRepository.findAll()
    }
}
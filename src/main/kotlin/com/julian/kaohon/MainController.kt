package com.julian.kaohon

import org.jooq.Log
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import java.io.Console
import java.util.logging.Logger
import kotlin.math.log

@Controller
@RequestMapping("/demo")
@CrossOrigin
class MainController {
    @Autowired
    private lateinit var userRepository : UserRepository

    @PostMapping("/add")
    @ResponseBody fun addNewUser(@RequestParam name : String, @RequestParam email : String) : String {
        var user = User()
        user.setName(name)
        user.setEmail(email)
        userRepository.save(user)
        return "Saved!\nUser: " + name + " | Email: " + email + "\n"
    }

    @GetMapping("/all")
    @ResponseBody fun getAllUsers() : Iterable<User> {
        return userRepository.findAll()
    }

    @DeleteMapping("/all/{id}")
    fun deleteUser(@PathVariable id : Int) {
        var toDelete = userRepository.findAll().find { x -> x.getId() == id }
        if (toDelete != null) {
            userRepository.delete(toDelete)
        } else {
            print("Error! Could not find user with ID $id")
        }
    }
}
package com.julian.kaohon

import org.jooq.Log
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.validation.BindingResult
import org.springframework.web.bind.annotation.*
import java.io.Console
import java.util.logging.Logger
import javax.xml.bind.ValidationException
import kotlin.math.log

@Controller
@RequestMapping("/demo")
@CrossOrigin
class MainController {
    @Autowired
    private lateinit var userRepository : UserRepository

    @PostMapping("/newAdd")
    fun createUser(@RequestBody user : User, bindingResult : BindingResult) {
        if (bindingResult.hasErrors()) {
            throw ValidationException("Error! Could not create user")
        }

    }

    @PostMapping("/add")
    @ResponseBody fun addNewUser(
            @RequestParam first : String,
            @RequestParam last : String,
            @RequestParam email : String,
            @RequestParam password : String,
            @RequestParam(required = false) name : String,
            @RequestParam(required = false) division : String,
            @RequestParam(required = false) hometown : String) : String {

        var user = User()
        user.setName(name)
        user.setFirst(first)
        user.setLast(last)
        user.setEmail(email)
        user.setDivision(division)
        user.setHometown(hometown)
        user.setFriendList()
        user.setPassword(password)
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
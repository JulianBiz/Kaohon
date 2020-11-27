package com.julian.kaohon

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.csrf.CookieCsrfTokenRepository
import org.springframework.stereotype.Controller
import org.springframework.validation.BindingResult
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.config.annotation.CorsRegistry
import java.security.Principal
import javax.servlet.FilterChain
import javax.servlet.ServletRequest
import javax.servlet.ServletResponse
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import javax.xml.bind.ValidationException


@Controller
@RequestMapping("/demo")
@CrossOrigin(origins = ["http://localhost:8080", "http://localhost:4200"], allowedHeaders = ["*"])
class MainController {
    @Autowired
    private lateinit var userRepository : UserRepository

    @PostMapping("/newAdd")
    @ResponseBody fun createUser(@RequestBody user : User, bindingResult : BindingResult) : String {
        if (bindingResult.hasErrors()) {
            throw ValidationException("Error! Could not create user")
        }
        var temp = User()
        temp.setFirst(user.getFirst())
        temp.setLast(user.getLast())
        temp.setName(user.getFirst() + " " + user.getLast());
        temp.setPassword(user.getPassword())
        temp.setEmail(user.getEmail())
        userRepository.save(temp)
        return "Saved!\nUser: " + temp.getFirst();
    }

    @CrossOrigin(origins = ["http://localhost:8080", "http://localhost:4200"], allowedHeaders = ["*"])
    @RequestMapping("/user")
    fun user(user: Principal) : Principal {
        return user;
    }

    @CrossOrigin(origins = ["http://localhost:8080", "http://localhost:4200"], allowedHeaders = ["*"])
    @PostMapping("/isUser")
    @ResponseBody fun checkUser(@RequestParam email : String, @RequestParam pw : String) : Boolean {
        println("Email: ${email} | PW: ${pw}");
        val user : User? = userRepository.findAll().find {
            user -> user.getEmail() == email && user.getPassword() == pw
        }
        return user != null;
    }

    @PostMapping("/add")
    @ResponseBody fun addNewUser(
            @RequestParam(required = false) first : String,
            @RequestParam(required = false) last : String,
            @RequestParam(required = false) email : String,
            @RequestParam(required = false) password : String,
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

    @GetMapping("/checkUser")
    @ResponseBody fun getUser(@RequestParam("email") email : String, @RequestParam("pw") pw : String) : User? {
        return userRepository.findAll().find {
            x -> x.getEmail() == email && x.getPassword() == pw;
        }
    }

    @GetMapping("/all")
    @ResponseBody fun getAllUsers() : Iterable<User> {
        return userRepository.findAll()
    }

//    @RequestMapping("/")

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
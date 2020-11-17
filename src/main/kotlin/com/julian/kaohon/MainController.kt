package com.julian.kaohon

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
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
        temp.setPassword(user.getPassword())
        temp.setEmail(user.getEmail())
        userRepository.save(temp)
        return "Saved!\nUser: " + temp.getFirst();
    }

    @CrossOrigin(origins = ["http://localhost:8080", "http://localhost:4200"], allowedHeaders = ["*"])
    @RequestMapping("/user")
    fun user(user: Principal?) : Principal? {
        return user;
    }

    @Configuration
    protected class SecurityConfiguration : WebSecurityConfigurerAdapter() {
        @Override
        protected override fun configure(http: HttpSecurity) {
            try {
                http
                .csrf()
                .disable()
                .cors()
                .and().formLogin().usernameParameter("julian").passwordParameter("kuribo").and()
                .authorizeRequests()
                .antMatchers("/index.html", "/", "/home", "/login", "/demo/user", HttpMethod.OPTIONS.toString())
                .permitAll()
                .anyRequest()
                .authenticated()

//                csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
//                        .and().formLogin().loginPage("/")
//                        .usernameParameter("julian")
//                        .passwordParameter("kuribo")
//                        .defaultSuccessUrl("/demo/user")
//                        .failureUrl("/demo/user");


            } catch (e: Exception) {

            }
        }
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
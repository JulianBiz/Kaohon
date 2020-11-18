package com.julian.kaohon

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder

@Configuration
@EnableWebSecurity
class SecurityConfiguration : WebSecurityConfigurerAdapter() {
    @Override
    protected override fun configure(auth: AuthenticationManagerBuilder?) {
        auth!!.inMemoryAuthentication()
                .withUser("julian").password(passwordEncoder().encode("kuribo")).roles("ADMIN").and()
                .withUser("test").password(passwordEncoder().encode("test123")).roles("USER");
    }

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

    @Bean
    fun passwordEncoder() : PasswordEncoder {
        return BCryptPasswordEncoder()
    }
}
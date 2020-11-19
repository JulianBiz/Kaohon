package com.julian.kaohon

import org.springframework.boot.Banner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@SpringBootApplication
@RestController
class KaohonApplication

fun main(args: Array<String>) {
	@RequestMapping("/")
	fun home(): String {
		return "<h3>Kaohon Demo</h3>"
	}

	runApplication<KaohonApplication>(*args) {}
}

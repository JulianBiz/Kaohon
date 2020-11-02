package com.julian.kaohon

import org.springframework.data.repository.CrudRepository
import com.julian.kaohon.User

interface UserRepository : CrudRepository<User, Int> {

}
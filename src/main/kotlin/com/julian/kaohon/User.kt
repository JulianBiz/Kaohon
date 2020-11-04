package com.julian.kaohon
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private var id: Int = 0

    private var email: String = "-"
    private var name: String = "-"

    fun setEmail(em : String) { email = em }
    fun setName(nm : String) { name = nm }
    fun setId(i : Int) { id = i }
    fun getEmail(): String { return email }
    fun getName() : String { return name }
    fun getId() : Int { return id }

    @Override
    override fun toString(): String {
        return id.toString() + " | Name: " + name + " | Email: " + email
    }
}
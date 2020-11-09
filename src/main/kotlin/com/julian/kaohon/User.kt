package com.julian.kaohon
import org.hibernate.mapping.Set
import java.util.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private var id: Int = 0

    //ToDo: Eventually, make individual classes that hold specific information for organizational purposes
    private var email: String = ""
    private var name: String = ""
//    private var hometown : String = ""
//    private var division : String = ""
    //private lateinit var dateOfBirth : Date
//    private lateinit var friendList: Set

    fun setEmail(em : String) { email = em }
    fun setName(nm : String) { name = nm }
    fun setId(i : Int) { id = i }
    fun getEmail(): String { return email }
    fun getName() : String { return name }
    fun getId() : Int { return id }

//    fun getFriendList() : Set {
//        return friendList;
//    }

    @Override
    override fun toString(): String {
        return id.toString() + " | Name: " + name + " | Email: " + email
    }
}
package com.julian.kaohon
import java.util.*
import javax.persistence.*

@Entity
class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private var id: Int = 0

    //ToDo: Eventually, make individual classes that hold specific information for organizational purposes
    private var email: String = ""
    private var name: String = ""
    private var first: String = ""
    private var last: String = ""
    private var hometown : String = ""
    private var division : String = ""
    private var phone : String = ""
    private var password : String = ""

    @ElementCollection
    private lateinit var friendList: Set<Int>

    fun setEmail(em : String) { email = em }
    fun setName(nm : String) { name = nm }
    fun setFirst(fs : String) { first = fs }
    fun setLast(ls : String) { last = ls }
    fun setId(i : Int) { id = i }
    fun setHometown(s : String) { hometown = s }
    fun setDivision(d : String) { division = d }
    fun setFriendList() { friendList = setOf() }
    fun setPassword(p : String) { password = p }

    fun getEmail(): String { return email }
    fun getName() : String { return name }
    fun getFirst() : String { return first; }
    fun getLast() : String { return last; }
    fun getId() : Int { return id }
    fun getHometown() : String { return hometown; }
    fun getDivision() : String { return division; }
    fun getPhone() : String { return phone; }
    fun getPassword() : String { return password; }

    fun getFriendList() : Set<Int> {
        return friendList;
    }

    //ToDo Later: Password Encryption

    @Override
    override fun toString(): String {
        return id.toString() + " | Name: " + name + " | Email: " + email
    }
}
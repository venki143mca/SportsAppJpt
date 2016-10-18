"use strict"

class UserService {
    
    Constructor(fname, lname, email, mob, password) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.mob = mob;
        this.password = password;
    }
    
    ping() {
        
        console.log(`ping reached. ${this.fname}, ${this.lname}`);
    }
    
}

exports.UserService = UserService;
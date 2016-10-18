"use strict"

var fs = require("fs");

class UserService {
    
    constructor(fname, lname, email, mob, password) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.mob = mob;
        this.password = password;
    }
    ping() {
      console.log(`ping reached. ${this.mob}`);  
    }
    writeToFile() {
        console.log(`ping reached. ${this.mob} ${new Date()}`);
       var todayDate = new Date().toISOString();
        var data = {
                "fname": this.fname,
                "lname": this.lname,
                "mob" : this.mob,
                "email": this.email,
                "password": this.password,
                "startDate": todayDate
            };
        
         fs.appendFile('./database/data.json', JSON.stringify(data), function (err) {
             if (err) return console.log(err);
             console.log('Hello World > helloworld.txt');
         });
        return data;
    }
    
}

exports.UserService = UserService;
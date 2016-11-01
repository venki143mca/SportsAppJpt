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
    register() {
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
         fs.appendFile('./database/data.json', ","+JSON.stringify(data), function (err) {
             if (err) return console.log(err);
             console.log('Hello World > helloworld.txt');
         });
        return data;
    }
    
    login() {
        console.log(`ping reached. ${this.email} ${this.password}`);
        try {
           var content = fs.readFileSync("./database/data.json","utf-8");
           content = content + "]"
            let db = JSON.parse(content);
            for(var item of db) {
                 if(item.email === this.email && item.password === this.password) {
                     console.log(item.email);
                     return item;
             }
            }
        }
        catch (e) {
          console.log(e);
        }
        
        return null;
    }
    
    getAllUsers() {
        console.log(`ping reached get all users method.`);
        let db;
        try{
        var content = fs.readFileSync("./database/data.json","utf-8");
        content = content + "]";
        db = JSON.parse(content);
        }
        catch(e) {
            console.log(e);
        }
        return db;
    }
    
    
}

exports.UserService = UserService;
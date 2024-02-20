const bcrypt = require('bcryptjs');

const db = require('../data/database');

class User{
    constructor(email,password,fullname,street,postal,city){
        this.email=email;
        this.password=password;
        this.name=fullname;
        this.address={
            street:street,
            postalCode:postal,
            city:city
        };
    }
    async signup(){
        const hashpassword = await bcrypt.hash(this.password,12);
        //const hashaddress = await bcrypt.hash(this.address,12);

        await db.getDb().collection('users').insertOne({
            email:this.email,
            password:hashpassword,
            name:this.name,
            address:this.address
        });

    }
}
module.exports=User;
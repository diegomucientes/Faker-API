const faker = require('faker');



class FakeUsuario {
    constructor(){
        this._id = faker.datatype.uuid(),
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName();
        this.phoneNum=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}

module.exports=FakeUsuario;

const faker = require('faker')


class Empresa{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name=faker.company.companyName();
        this.direccion={
            calle: faker.address.streetName(),
            ciudad:faker.address.city(),
            provincia:faker.address.state(),
            codPostal:faker.address.zipCode(),
            pais:faker.address.country()
        }
    }
}


module.exports=Empresa;

class testDataElements {
    constructor() {
        this.email = faker.internet.email();
        this.staticEmail = "rene.vega@applydigital.com";
        this.staticPassword = "Renetest-123";
        this.password = faker.internet.password();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = "978548578";
        this.rut = "184820188";
        this.street = faker.address.streetName();
        this.streetNumber = faker.address.zipCode();
        this.apartmentOfficeOther = faker.address.secondaryAddress();
    }
}

export default new testDataElements();
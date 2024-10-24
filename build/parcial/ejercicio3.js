function validatePhoneNumber(phoneNumber) {
    if (phoneNumber == '') {
        return false;
    }
    return true;
}
class Contact {
    constructor() {
        this.id = 1;
        this.name = 'Lemus';
    }
    add(contact) {
        console.log('Adding contact: ', contact);
    }
}
console.log(validatePhoneNumber);
//# sourceMappingURL=ejercicio3.js.map
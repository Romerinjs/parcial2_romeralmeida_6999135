interface ContactInfo {
    id: number;
    name: string;
    phoneNumber: string;
}
function validatePhoneNumber(phoneNumber: string): boolean {
    if (phoneNumber == '') {
        return false;
    }
return true;}

function createContact(name: string, phoneNumber: string): ContactInfo {
    if (!validatePhoneNumber(phoneNumber)) {
        throw new Error('Invalid phone number');
    }
    return {
        id: Math.floor(Math.random() * 1000),
        name,
        phoneNumber,
    };
}

function updateContact(contact: ContactInfo, newName: string, newPhoneNumber: string): void {
    if (!validatePhoneNumber(newPhoneNumber)) {
        throw new Error('Invalid phone number');
    }
    contact.name = newName;
    contact.phoneNumber = newPhoneNumber;
}

function deleteContact(contact: ContactInfo): void {
    // Implementar el borrado del contacto
}

const contacts: ContactInfo[] = [];

const newContact = createContact('John Doe', '1234567890');

contacts.push(newContact);

console.log(contacts);

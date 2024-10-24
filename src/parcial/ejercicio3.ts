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

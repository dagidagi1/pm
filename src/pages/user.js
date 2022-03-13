export default class User {
  constructor(fname, lname, phone, email, password, keyId) {
    this.name = fname + lname;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.keyId = keyId;
  }
}

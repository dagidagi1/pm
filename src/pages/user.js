export default class User {
  constructor(fname, lname, phone, email, password, key_id) {
    this.name = fname + lname;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.key_id = key_id;
  }
}

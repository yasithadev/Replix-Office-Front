class User {
    userName;
    email;
    firstName;
    secondName;
    active;
  
    constructor(userName, email, firstName, secondName, active) {
      this.userName = userName;
      this.email = email;
      this.firstName = firstName;
      this.secondName = secondName;
      this.active = active;
    }
  
    // Getters
    getUserName() {
      return this.userName;
    }
  
    getEmail() {
      return this.email;
    }
  
    getFirstName() {
      return this.firstName;
    }
  
    getSecondName() {
      return this.secondName;
    }
  
    isActive() {
      return this.active;
    }
  
    // Setters
    setUserName(userName) {
      this.userName = userName;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    setFirstName(firstName) {
      this.firstName = firstName;
    }
  
    setSecondName(secondName) {
      this.secondName = secondName;
    }
  
    setActive(active) {
      this.active = active;
    }
    /*
    toJSON() {
        return {
          userName: this.userName,
          email: this.email,
          firstName: this.firstName,
          secondName: this.secondName,
          active: this.active
        };
      }
      */
      toString() {
        return `User: ${this.userName} (${this.email}) - ${this.getFullName()} [${this.active ? 'Active' : 'Inactive'}]`;
      }
      equals(otherUser) {
        return otherUser instanceof User &&
               this.userName === otherUser.getUserName() &&
               this.email === otherUser.getEmail();
      }
  }
  
  export default User;
  
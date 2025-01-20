class Authentication {
    #jwt;
    #permissions;
  
    constructor(jwt, permissions) {
      if (!Authentication.instance) {
        this.#jwt = jwt;
        this.#permissions = permissions;
        Authentication.instance = this;
      }
  
      return Authentication.instance;
    }
  
    // Getter for jwt
    getJwt() {
      return this.#jwt;
    }
  
    // Setter for jwt
    setJwt(jwt) {
      this.#jwt = jwt;
    }
  
    // Getter for permissions
    getPermissions() {
      return this.#permissions;
    }
  
    // Setter for permissions
    setPermissions(permissions) {
      this.#permissions = permissions;
    }
  }
  
  export default Authentication;
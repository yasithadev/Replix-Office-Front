class Authentication {
    #jwt;
    #permissions;
  
    constructor(jwt, permissions) {
      if (!Authentication.instance) {//make the class singleton
        this.#jwt = jwt;
        this.#permissions = permissions;
        Authentication.instance = this;
      }
      return Authentication.instance;
    }
    // Static method to get the singleton instance
    static getInstance(jwt = '', permissions = []) {
      if (!Authentication.instance) {
        Authentication.instance = new Authentication(jwt, permissions);
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
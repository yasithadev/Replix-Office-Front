class NetworkErrorException extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
}
export default NetworkErrorException;
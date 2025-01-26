class InvalidCredentialException extends Error {
    constructor(message = 'Invalid credentials provided') {
      super(message);
      this.name = 'InvalidCredentialException';
    }
}
export default InvalidCredentialException;
/* Example usage
try {
    throw new InvalidCredentialException('Custom error message');
  } catch (error) {
    if (error instanceof InvalidCredentialException) {
      console.error(error.name + ': ' + error.message);
    } else {
      console.error('An unexpected error occurred:', error);
    }
}
*/
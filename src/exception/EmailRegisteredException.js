//import DataConflictExceptin from './DataConflictExceptin';

class EmailRegisteredException extends Error {
    constructor(message) {
        super(message);
        this.name = 'EmailRegisteredException';
      }
}
export default EmailRegisteredException;
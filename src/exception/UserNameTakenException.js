import DataConflictExceptin from './DataConflictExceptin';

class UserNameTakenException extends DataConflictExceptin {
    constructor(message) {
        super(message);
        this.name = 'UserNameTakenException';
      }
}
export default UserNameTakenException;
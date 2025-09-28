class DataConflictExceptin extends Error {
    constructor(message) {
        super(message);
        this.name = 'DataConflictExceptin';
      }
}
export default DataConflictExceptin;
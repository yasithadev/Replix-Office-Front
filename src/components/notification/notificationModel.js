class NotificationModel {
  constructor(id, type, message) {
    this.id = id;
    this.type = type;
    this.message = message;
  }
/*
  // Optional: Add methods for formatting or other operations
  getFormattedMessage() {
    return `[${this.type}] ${this.message}`;
  }

  //Optional: add static method to create notification from object
  static fromObject(obj) {
    return new Notification(obj.id, obj.type, obj.message);
  }
  */
}
export default NotificationModel;
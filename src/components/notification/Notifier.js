class Notifier {
    static notify(notificationType, message) {
     
        console.error("Event type is required.");
      
      const event = new CustomEvent("notify", {
        detail:{
            type: notificationType, // Allow event to bubble up the DOM tree
            message: message, // Allow event to be canceled
        }
      });
      document.dispatchEvent(event); 
  }
}
export default Notifier;
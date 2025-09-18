class DevLogger {
    constructor() {
      this.name = 'DevLogger';
      this.log = console.log.bind(console);
      this.info = console.info.bind(console);
      this.debug = console.debug.bind(console);
      this.trace = console.trace.bind(console);
      this.warn = console.warn.bind(console);
      this.error = console.error.bind(console);
    }
    getName() {
      return this.name;
    }
  }
  
  export default DevLogger;
class ProdLogger {
    
    constructor(logLevel) {
      if( logLevel ==='TRACE'){
        //do nothing
      }
      else if(logLevel ==='DEBUG'){
        console.log('logLevel === DEBUG')
        this.trace = function(){};
      }
      else if(logLevel ==='INFO' ){
        this.trace = function(){};
        this.debug = function(){};
      }
      else if( logLevel ==='WARN'){
        this.trace = function(){};
        this.debug = function(){};
        this.info = function(){};
      }
      else if( logLevel ==='ERROR'){
        this.trace = function(){};
        this.debug = function(){};
        this.info = function(){};
        this.warn = function(){};
      }
      else if( logLevel === 'OFF'){
        this.trace = function(){};
        this.debug = function(){};
        this.info = function(){};
        this.warn = function(){};
        this.error = function(){};
      }
      else{
        this.trace = function(){};
        this.debug = function(){};
        this.info = function(){};
        this.warn = function(){};
        this.error = function(){};
      }
      this.logs = [];
    }

    trace(...args){
      //console.trace.apply(console,args);
      this.logs.push(args);
    }
    debug(...args){
      //console.debug.apply(console,args);
      this.logs.push(args);
    }
    log(...args){
      //console.log.apply(console,args);
      this.logs.push(args);
    }
    info(...args){
      //console.info.apply(console,args);
      this.logs.push(args);
    }
    warn(...args){
      console.warn.apply(console,args);
      this.logs.push(args);
      //console.deug("logs ",this.logs);
    }
    error(...args){
      console.error.apply(console,args);
      this.logs.push(args);
    }
    getLogs() {
      //console.log.apply(console,numbers);
      return this.logs;
    }
    clearLogs() {
      //this.logs
      return ;
    }
  }
  
  export default ProdLogger;
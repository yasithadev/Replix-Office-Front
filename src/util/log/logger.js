import DevLogger from './DevLogger'
import ProdLogger from './ProdLogger'

const logLevel = process.env.REACT_APP_REPLIX_LOG_LEVEL;
console.log('logLevel' ,logLevel)
let logger;

    if (process.env.NODE_ENV === 'development') {
        //console.debug('NODE_ENV Development')
        logger = new ProdLogger(logLevel);
    } else if (process.env.NODE_ENV === 'production') {
        //console.debug('NODE_ENV Production')
        logger = new ProdLogger(logLevel);
    } else {
      throw new Error('Unknown environment');
    }
export default logger;
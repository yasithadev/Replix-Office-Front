import DevLogger from './DevLogger'
import ProdLogger from './ProdLogger'

const logLevel = process.env.REACT_APP_REPLIX_LOG_LEVEL;
let logger;
    if (process.env.NODE_ENV === 'development') {
        logger = new DevLogger(logLevel);
    } else if (process.env.NODE_ENV === 'production') {
        logger = new ProdLogger(logLevel);
    } else {
      throw new Error('Unknown environment');
    }
export default logger;
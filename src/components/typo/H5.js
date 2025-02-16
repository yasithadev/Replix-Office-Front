import {typo} from '../comp.properties.js';
function H5(props) {
    return (
      <div>
        <h1 className={typo.h5}>{props.children}</h1>
      </div>
    );
  }
  export default H5;
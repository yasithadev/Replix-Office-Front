import {typo} from '../comp.properties.js';
function H6(props) {
    return (
      <div>
        <h1 className={typo.h6}>{props.children}</h1>
      </div>
    );
  }
  export default H6;
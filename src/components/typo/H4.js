import {typo} from '../comp.properties.js';
function H4(props) {
    return (
      <div>
        <h1 className={typo.h4}>{props.children}</h1>
      </div>
    );
  }
  export default H4;
import {typo} from '../comp.properties.js';
function H1(props) {
    return (
      <div>
        <h1 className={typo.h1}>{props.children}</h1>
      </div>
    );
  }
  export default H1;
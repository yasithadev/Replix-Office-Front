import {typo} from '../comp.properties.js';
function H3(props) {
    return (
      <div>
        <h1 className={typo.h3}>{props.children}</h1>
      </div>
    );
  }
  export default H3;
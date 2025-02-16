import {typo} from '../comp.properties.js';
function Sub1(props) {
    return (
      <div>
        <h1 className={typo.sub1}>{props.children}</h1>
      </div>
    );
  }
  export default Sub1;
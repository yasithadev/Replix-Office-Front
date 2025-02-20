import {codeColor} from '../comp.properties.js';
import CodeStyles from './code.module.css';
function Code(props) {
  return (
    <pre className={codeColor.codeDisplay + " " + CodeStyles.codeDisplay}>
      <code>
        {props.children}
      </code>
    </pre>
  );
}
export default Code;
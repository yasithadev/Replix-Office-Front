import React, {useState,useRef,Children, useEffect,useImperativeHandle,cloneElement} from 'react';
//import console = require('console');
const Form = (props) => {
  const childRefs = useRef([]);
  const callChildMethods = () => {
    childRefs.current.forEach((ref, index) => {
      if (ref && ref.validate) {
      // console.log("if (ref && ref.validate) ");
        ref.validate();
      }
    });
  };
  return (
    <>
        {Children.map(props.children, (child, index) =>
        cloneElement(child, {
          ref: (ref) => (childRefs.current[index] = ref),
        })
      )}
      <button onClick={callChildMethods}>Validate</button>
    </>
  );
};

export default Form;




/*
import React, { useRef, Children, cloneElement } from 'react';

function ParentComponent({ children }) {
  const childRefs = useRef([]);

  const callChildMethods = () => {
    childRefs.current.forEach((ref, index) => {
      if (ref && ref.callMyMethod) {
        ref.callMyMethod(`Message from parent to child ${index + 1}`);
      }
    });
  };

  return (
    <div>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          ref: (ref) => (childRefs.current[index] = ref),
        })
      )}
      <button onClick={callChildMethods}>Call Child Methods</button>
    </div>
  );
}

export default ParentComponent;

// Example ChildComponent (same as before)
const ChildComponent = forwardRef((props, ref) => {
  const myMethod = (message) => {
    console.log(`Child method called with message: ${message}`);
  };

  useImperativeHandle(ref, () => ({
    callMyMethod: myMethod,
  }));

  return <div>Child Component</div>;
});

// Example usage
function App() {
  return (
    <ParentComponent>
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
    </ParentComponent>
  );
}
*/



/*additional*/
/*
import React, { forwardRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const myMethod = (message) => {
    console.log(`Child method called with message: ${message}`);
    // Perform actions within the child component
  };

  useImperativeHandle(ref, () => ({
    callMyMethod: myMethod, // Expose the method to the parent
  }));

  return <div>Child Component</div>;
});

export default ChildComponent;
*/
/*
import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const childRefs = useRef([]); // Array to store refs

  const callChildMethods = () => {
    childRefs.current.forEach((ref, index) => {
      if (ref && ref.callMyMethod) {
        ref.callMyMethod(`Message from parent to child ${index + 1}`);
      }
    });
  };

  const childCount = 3; // Number of child components

  return (
    <div>
      {Array.from({ length: childCount }).map((_, index) => (
        <ChildComponent
          key={index}
          ref={(ref) => (childRefs.current[index] = ref)} // Store refs
        />
      ))}
      <button onClick={callChildMethods}>Call Child Methods</button>
    </div>
  );
}

export default ParentComponent;
*/
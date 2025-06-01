import React, {useState,useRef,Children, useEffect,useImperativeHandle,cloneElement} from 'react';
import Notifier from '../../components/notification/Notifier';
import Raw from '../../components/raw/raw';
//import console = require('console');
const Form = (props) => {
  const childRefs = useRef([]);
  const callChildMethods = () => {
    let valid =true;
    let formData={};
    childRefs.current.forEach((ref, index) => {
      if (ref && ref.validate) {
      // console.log("if (ref && ref.validate) ");
        if(!ref.validate()){
          valid = false;
        }
      }
    });
    if(!valid){
      Notifier.notify("Error","WU0001 -Form contain Invalid Data.Please correct them before Submit");
    }
    else{
      childRefs.current.forEach((ref, index) => {
        if (ref && ref.getValue) {
          let propertyName = ref.getLabel().replace(/\s/g, '');
          if(!formData.hasOwnProperty(propertyName)){
            formData[propertyName] = ref.getValue();
          }
          else{
            Notifier.notify("Error","WD0001 -Duplicated Field lable : " + ref.getLabel()+". " + "This will overigth some values in your output json.Inorder to prevent this add name property to your fields." );//ToDo Error Log
          }
        }
      });
      console.log("formData ",formData);
    }
  };
  const groupChildren=()=>{
    // Convert children into an array for easier manipulation
    let childArray = React.Children.toArray(props.children);

    // Group every 3 children inside a div
    let groupedChildren = childArray.reduce((acc, child, index) => {
      let groupIndex = Math.floor(index / props.lan);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    
    // Create an object for new props to be added
    const newProps = {
      ref: (ref) => (childRefs.current[index] = ref),
      validateAndSubmit: callChildMethods, // child calls this method if the user hits the enter button
    };
    // Check if the original child already has a 'col' prop
    if (child.props && child.props.col === undefined) {
      newProps.col = "6"; // Or whatever default value you want for 'col'
    }

    acc[groupIndex].push(cloneElement(child, newProps));
    return acc;
    }, {});
    //return groupedChildren;
    return Object.values(groupedChildren); 
  }
  return (
    <>
        <div className="parent-container">
            {

            groupChildren().map((group, index) => (
                <Raw key={index} className="child-group">
                    {group}
                </Raw>
            ))}
        </div>
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
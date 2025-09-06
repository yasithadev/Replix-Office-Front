import React, { useState ,useRef} from 'react';
import CustomSelect from '../../components/Rselect/rselect'; // Adjust the path if your component is in a different folder
import Raw from '../../components/raw/raw';
import Sheet from '../../components/sheet/sheet';
import ROption from '../../components/Rselect/roption'; // Import the new ROption component

function SelectPage() {
  // Define the options for your custom select dropdown
  const carOptions = [
    { value: '0', label: 'BYD' }, // A default or placeholder option
    { value: '1', label: 'Audi' },
    { value: '2', label: 'BMW' },
    { value: '3', label: 'Citroen' },
    { value: '4', label: 'Ford' },
    { value: '5', label: 'Honda' },
  ];

  // State to hold the currently selected value from the CustomSelect
  const [selectedCarValue, setSelectedCarValue] = useState('');

  // Handler function to update the state when an option is selected
  const handleCarSelection = (selectedValue) => {
    console.log('Selected car value:', selectedValue);
    setSelectedCarValue(selectedValue);
  };

  // Define options for another custom select
  const fruitOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
  ];

  const [selectedFruitValue, setSelectedFruitValue] = useState('');

  const handleFruitSelection = (selectedValue) => {
    console.log('Selected fruit value:', selectedValue);
    setSelectedFruitValue(selectedValue);
  };

  const placeHolderFieldRef = useRef();
  const getValueFromFieldWithPlaceHolder = () => {
    if (placeHolderFieldRef.current) {
      const value = placeHolderFieldRef.current.getValue();
      alert(`Selected value from placeholder field: ${value}`);
    }
  };
  const validateFieldWithPlaceHolder= () => {
    if (placeHolderFieldRef.current) {
      let isValid = placeHolderFieldRef.current.validate("custom validation message");
    }
  }

  const initialValueFieldRef = useRef();

  const getValueFromFieldWithInitialValue= () => {
    if (initialValueFieldRef.current) {
      const value = initialValueFieldRef.current.getValue();
      alert(`Selected value from initialValue field: ${value}`);
    }
  };

  const initialValueCanNotFindFieldRef = useRef();
  const getValueFromFieldWithInitialValueCanNotFind= () => {
    if (initialValueCanNotFindFieldRef.current) {
      const value = initialValueCanNotFindFieldRef.current.getValue();
      alert(`Selected value from initialValueCanNotFind field: ${value}`);
    }
  };


  const initialValueAndPlaceHolderFieldRefFieldRef = useRef();

  const getValueFromFieldinitialValueAndPlaceHolder= () => {
    if (initialValueAndPlaceHolderFieldRefFieldRef.current) {
      const value = initialValueAndPlaceHolderFieldRefFieldRef.current.getValue();
      alert(`Selected value from both InitialValue And PlaceHolder exsists field: ${value}`);
    }
  };

  const noInitialValueAndPlaceHolderFieldRefFieldRef = useRef();

  const getValueFromFieldNoInitialValueAndPlaceHolder= () => {
    if (noInitialValueAndPlaceHolderFieldRefFieldRef.current) {
      const value = noInitialValueAndPlaceHolderFieldRefFieldRef.current.getValue();
      alert(`Selected value from noInitialValueAndPlaceHolder field: ${value}`);
    }
  };
  const validateNoInitialValueAndPlaceHolder= () => {
    if (noInitialValueAndPlaceHolderFieldRefFieldRef.current) {
      let isValid = noInitialValueAndPlaceHolderFieldRefFieldRef.current.validate();
    }
  }

  return (<Sheet>
    <div style={{ padding: '20px' }}>
      <h1>Using the Custom Select Component</h1>

      <p>Choose your favorite car:</p>
      {/* First instance of CustomSelect */}
      <Raw>
        <CustomSelect
          required={true} 
          ref={placeHolderFieldRef}
          col="3"
          label = "Select field with placeHolder"
          options={carOptions}           // Pass the array of options
          onSelectChange={handleCarSelection} // Pass the handler for selection changes
          placeHolder="Select car:"    // Optional: Set the initially displayed label
        /> 
        <input type="text"/>
        <CustomSelect
          ref={initialValueFieldRef}
          col="3" 
          label = "Select field with initialValue"
          options={carOptions}           // Pass the array of options
          onSelectChange={handleCarSelection} // Pass the handler for selection changes
          initialValue="0"    // Optional: Set the initially displayed label
        />
      </Raw>
      
      {selectedCarValue && (
        <p>
          You have selected: <strong>{selectedCarValue}</strong>
        </p>
      )}
      <button onClick={getValueFromFieldWithPlaceHolder}>Get value of field with placeHolder</button><button onClick={validateFieldWithPlaceHolder}>validate field with placeHolder</button>
      <button onClick={getValueFromFieldWithInitialValue}>Get value of field with InitialValue</button>
      <br />
      <hr />
      <br />

      <p>initial value that not exist in optipn list:</p>
      {/* Second instance of CustomSelect to show reusability */}
      <Raw>
      <CustomSelect
        ref={initialValueCanNotFindFieldRef}
        options={fruitOptions}
        col="6"
        label = "label"
        labelOnLeft="true" 
        onSelectChange={handleFruitSelection}
        initialValue="mango"
      />
      </Raw>
      <button onClick={getValueFromFieldWithInitialValueCanNotFind}>Get value of field with wrong initial value</button>
      {selectedFruitValue && (
        <p>
          You have selected: <strong>{selectedFruitValue}</strong>
        </p>
      )}

      {/* An ordinary input field to show that clicks outside the select will close it */}
      <div style={{ marginTop: '50px' }}>
        <label htmlFor="someInput">Test Input:</label>
        <input type="text" id="someInput" placeholder="Click here to close select" />
      </div>
      <p>placeholder and initialValue both provided</p>
      <Raw>
      <CustomSelect
      ref={initialValueAndPlaceHolderFieldRefFieldRef}
        col="3"
        onSelectChange={handleCarSelection}
        placeHolder="select a car"
        initialValue="0"
        label = "label"
      >
        <ROption value="0">BYD</ROption>
        <ROption value="1">Audi</ROption>
        <ROption value="2">BMW</ROption>
      </CustomSelect>
      </Raw>
      <button onClick={getValueFromFieldinitialValueAndPlaceHolder}>Get value of field with placeholder and initialValue both provided</button>
      <p>placeholder and initialValue both "not" provided</p>
      <Raw>
            <CustomSelect
            required={true} 
            ref={noInitialValueAndPlaceHolderFieldRefFieldRef}
            label = "label"
        options={fruitOptions}
        col="4"
        labelOnLeft="true" 
        onSelectChange={handleFruitSelection}
      />
        </Raw>
        <button onClick={getValueFromFieldNoInitialValueAndPlaceHolder}>Get value of field with placeholder and initialValue both not provided</button><button onClick={validateNoInitialValueAndPlaceHolder}>validate</button>
    </div>


  </Sheet>);
}
export default SelectPage;
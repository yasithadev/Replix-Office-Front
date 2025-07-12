import React, { useState } from 'react';
import CustomSelect from '../../components/Rselect/rselect'; // Adjust the path if your component is in a different folder
import Raw from '../../components/raw/raw';
import Sheet from '../../components/sheet/sheet';
import ROption from '../../components/Rselect/roption'; // Import the new ROption component

function SelectPage() {
  // Define the options for your custom select dropdown
  const carOptions = [
    { value: '0', label: 'Select car:' }, // A default or placeholder option
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

  return (<Sheet>
    <div style={{ padding: '20px' }}>
      <h1>Using the Custom Select Component</h1>

      <p>Choose your favorite car:</p>
      {/* First instance of CustomSelect */}
      <Raw>

       
      <CustomSelect
       col="3"
       label = "label"
        options={carOptions}           // Pass the array of options
        onSelectChange={handleCarSelection} // Pass the handler for selection changes
        initialValue="Select car:"    // Optional: Set the initially displayed label
      /> 
      <input type="text"/>
            <CustomSelect
            col="3" 
            label = "label"
        options={carOptions}           // Pass the array of options
        onSelectChange={handleCarSelection} // Pass the handler for selection changes
        initialValue="Select car:"    // Optional: Set the initially displayed label
      />
       </Raw>
      {selectedCarValue && (
        <p>
          You have selected: <strong>{selectedCarValue}</strong>
        </p>
      )}

      <br />
      <hr />
      <br />

      <p>Choose your favorite fruit:</p>
      {/* Second instance of CustomSelect to show reusability */}
      <Raw>
      <CustomSelect
        options={fruitOptions}
        col="6"
        label = "label"
        labelOnLeft="true" 
        onSelectChange={handleFruitSelection}
        initialValue="Apple" // You can set any label as initial
      />
      </Raw>
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

      <Raw>
      <CustomSelect
        col="3"
        onSelectChange={handleCarSelection}
        initialValue="0"
        label = "label"
      >
        <ROption value="0">Select car:</ROption>
        <ROption value="1">Audi</ROption>
        <ROption value="2">BMW</ROption>
      </CustomSelect>
      </Raw>
      
    </div>


  </Sheet>);
}
export default SelectPage;
import Input from '../../components/input/Input';
import Sheet from '../../components/sheet/sheet';
import Raw from '../../components/raw/raw';
import H4 from '../../components/typo/H4';
import H5 from '../../components/typo/H5';
import H6 from '../../components/typo/H6';
import Sub1 from '../../components/typo/Sub1';
import Form from '../../components/form/Form';
import Name from '../../components/formfield/Name';
import React, {useState,useRef, useEffect,useImperativeHandle} from 'react';
import Notifier from '../../components/notification/Notifier';
import CustomSelect from '../../components/Rselect/rselect'; 

const FormPage = (props) => { 
    const myRef = useRef();  
    const onClickFunction = () => {
        myRef.current?.changeValidationMessage("This is new validation message");
    }
    const showValue = () => {
        let val = myRef.current?.getValue();
        Notifier.notify("Error","🛈 " + val);
        //console.log(val);
    }

        const carOptions = [
          { value: '0', label: 'Select carsssssssssssssssssssssssssssss:' }, // A default or placeholder option
          { value: '1', label: 'Audi' },
          { value: '2', label: 'BMW' },
          { value: '3', label: 'Citroen' },
          { value: '4', label: 'Ford' },
          { value: '5', label: 'Honda' },
          { value: '5', label: 'Nesan' },
          { value: '5', label: 'Toyota' },
          { value: '5', label: 'Mitsubishi' },
          { value: '1', label: 'Audi' },
          { value: '2', label: 'BMW' },
          { value: '3', label: 'Citroen' },
          { value: '4', label: 'Ford' },
          { value: '5', label: 'Honda' },
          { value: '5', label: 'Nesan' },
          { value: '5', label: 'Toyota' },
          { value: '5', label: 'Mitsubishi' }
        ];
    
    return <Sheet>
        <Form lan="2">
            <Name label="First Name"/>
            <Name label="Last Name"/>
            <Name label="First Name"/>
            <Name label="Last Name"/>
            <Name label="Last Name"/>
            <CustomSelect
            label = "Select Lable"
       col="6"
        options={carOptions}           // Pass the array of options
        initialValue="Select rrrrrrrrrrrrrrrrrrrrrrrrrrrr:"    // Optional: Set the initially displayed label
      /> 
            <Name col="4" label="Full Name"/>
            <Name col="6" label="Full Name"/>
        </Form>
    </Sheet>;
}
export default FormPage;
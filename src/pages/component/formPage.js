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
    return <Sheet>
        <Form>
        <Name label="First Name"/>
        <Name label="Last Name"/>
        <Name label="Full Name"/>
        <Name label="Full Name"/>
        </Form>
    </Sheet>;
}
export default FormPage;
import Input from '../../components/input/Input';
import Sheet from '../../components/sheet/sheet';
import Raw from '../../components/raw/raw';
import H4 from '../../components/typo/H4';
import H5 from '../../components/typo/H5';
import H6 from '../../components/typo/H6';
import Sub1 from '../../components/typo/Sub1';
import React, {useState,useRef, useEffect,useImperativeHandle} from 'react';
import Notifier from '../../components/notification/Notifier';

const InputPage = (props) => { 
    const myRef = useRef();  
    const onClickFunction = () => {
        myRef.current?.changeValidationMessage();
    }
    const showValue = () => {
        let val = myRef.current?.getValue();
        Notifier.notify("Error","🛈 " + val);
        //console.log(val);
    }
    return <Sheet>
        <H5>Single column Form</H5>
        <Sub1>Lable on Top</Sub1>
        <Input col="1" type="tel" label="Tel (Office)"/> 
        <Input col="1" type="tel" label="Tel (Office)"/> 
        <Input col="1" type="tel" label="Tel (Office)"/> 
        <Sub1>Lable on Left</Sub1>
        <Raw><Input labelOnLeft="true" col="1" type="tel" label="Tel (Office)"/></Raw> 
        <Raw><Input labelOnLeft="true" col="1" type="tel" label="Tel (Home)"/></Raw> 
        <Raw><Input labelOnLeft="true" col="1" type="tel" label="Address (Home)"/></Raw> 
        <Sub1>Lable on Left with Long Lables</Sub1>
        <Raw><Input labelOnLeft="true" longLabels="true" col="1"  label="Tel (Office)"/></Raw> 
        <Raw><Input labelOnLeft="true" longLabels="true" col="1" label="Sender Mobile Number should here * (M)"/></Raw> 
        <Raw><Input labelOnLeft="true" longLabels="true" col="1" label="Address (Home)"/></Raw> 
        <H5>Two columns Form</H5>
        <Sub1>Lable on Top</Sub1>
        <button onClick={onClickFunction}>validate</button>
        <button onClick={showValue}>value</button>
        <Raw>
            <Input ref={myRef} labelOnLeft="false" col="2" type="tel" label="Tel (Office)"/> 
            <Input labelOnLeft="false" col="2" type="tel" label="Tel (Office)"/>
        </Raw>
        <Raw>
            <Input labelOnLeft="false" col="2" type="tel" label="Tel (Office)"/> 
            <Input labelOnLeft="false" col="2" type="tel" label="Tel (Office)"/>
        </Raw>
        <Input col="2" type="tel" label="Tel (Office)"/>

    <Sub1>Lable on Left</Sub1>
    <Raw>
        <Input labelOnLeft="true" col="2" type="tel" label="Tel (Office)"/>
        <Input labelOnLeft="true" col="2" type="tel" label="Tel (Office)"/>
    </Raw>
    <Raw>
        <Input labelOnLeft="true" col="2" type="tel" label="Address"/>
        <Input labelOnLeft="true" col="2" type="tel" label="Email"/>
    </Raw>
    <Raw><Input labelOnLeft="true" col="2" type="tel" label="Tel (Office)"/></Raw>
    <H5>Three columns Form</H5>
    <Sub1>Lable on Top</Sub1>
        <Raw>
            <Input labelOnLeft="false" col="3" type="tel" label="Tel (Office)"/> 
            <Input labelOnLeft="false" col="3" type="tel" label="Tel (Office)"/>
            <Input labelOnLeft="false" col="3" type="tel" label="Tel (Office)"/>
        </Raw>
        <Raw>
            <Input labelOnLeft="false" col="3" type="tel" label="Tel (Office)"/> 
            <Input labelOnLeft="false" col="3" type="tel" label="Tel (Office)"/>
            <Input labelOnLeft="false" col="3" type="tel" label="Tel (Office)"/>
        </Raw>
        <Raw>
            <Input col="3" type="tel" label="Tel (Office)"/>
            <Input col="3" type="tel" label="Tel (Office)"/>
        </Raw>
        <Sub1>Lable on Left</Sub1>
        <Raw>
            <Input labelOnLeft="true" col="3" type="tel" label="Name"/> 
            <Input labelOnLeft="true" col="3" type="tel" label="Address"/>
            <Input labelOnLeft="true" col="3" type="tel" label="Tel (Office)"/>
        </Raw>
        <Raw>
            <Input labelOnLeft="true" col="3" type="tel" label="Email"/> 
            <Input labelOnLeft="true" col="3" type="tel" label="No. of children "/>
            <Input labelOnLeft="true" col="3" type="tel" label="Age"/>
        </Raw>
        <Raw>
            <Input labelOnLeft="true" col="3" type="tel" label="Designation"/>
            <Input labelOnLeft="true" col="3" type="tel" label="Department"/>
        </Raw>
        <H5>Four columns Form</H5>
    <Sub1>Lable on Top</Sub1>
        <Raw>
            <Input labelOnLeft="false" col="4" type="tel" label="Tel (Office)"/> 
            <Input labelOnLeft="false" col="4" type="tel" label="Tel (Office)"/>
            <Input labelOnLeft="false" col="4" type="tel" label="Tel (Office)"/>
            <Input labelOnLeft="false" col="4" type="tel" label="Tel (Office)"/>
        </Raw>
        <Raw>
            <Input labelOnLeft="false" col="4" type="tel" label="Tel (Office)"/> 
            <Input labelOnLeft="false" col="4" type="tel" label="Tel (Office)"/>
            <Input labelOnLeft="false" col="4" type="tel" label="Tel (Office)"/>
            <Input labelOnLeft="false" col="4" type="tel" label="Tel (Office)"/>
        </Raw>
        <Raw>
            <Input col="4" type="tel" label="Tel (Office)"/>
            <Input col="4" type="tel" label="Tel (Office)"/>
            <Input col="4" type="tel" label="Tel (Office)"/>
        </Raw>
        <Sub1>Lable on Left</Sub1>
        <Raw>
            <Input labelOnLeft="true" col="4" type="tel" label="Name"/> 
            <Input labelOnLeft="true" col="4" type="tel" label="Address"/>
            <Input labelOnLeft="true" col="4" type="tel" label="Tel (Office)"/>
            <Input labelOnLeft="true" col="4" type="tel" label="Tel (Office)"/>
        </Raw>
        <Raw>
            <Input labelOnLeft="true" col="4" type="tel" label="Email"/> 
            <Input labelOnLeft="true" col="4" type="tel" label="No. of children "/>
            <Input labelOnLeft="true" col="4" type="tel" label="Age"/>
            <Input labelOnLeft="true" col="4" type="tel" label="Age"/>
        </Raw>
        <Raw>
            <Input labelOnLeft="true" col="4" type="tel" label="Designation"/>
            <Input labelOnLeft="true" col="4" type="tel" label="Department"/>
            <Input labelOnLeft="true" col="4" type="tel" label="Department"/>
        </Raw>
</Sheet>;
}
export default InputPage;
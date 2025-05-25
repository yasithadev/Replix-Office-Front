import Input from '../../components/input/Input';
import Sheet from '../../components/sheet/sheet';
import Raw from '../../components/raw/raw';
import H4 from '../../components/typo/H4';
import H5 from '../../components/typo/H5';
import H6 from '../../components/typo/H6';
import Sub1 from '../../components/typo/Sub1';
import Form from '../../components/form/Form';
import DatePicker from '../../components/datePicker/DatePicker';
import HtmlPicker from '../../components/datePicker/htmlPicker';
import React, {useState,useRef, useEffect,useImperativeHandle} from 'react';
import Notifier from '../../components/notification/Notifier';

const DatePickerPage = (props) => { 
    const dateSelected =  (date) => {
        console.log("----------------dateSelected----------------- ",date)
      }
    return <Sheet>
        <H4>DatePicker</H4>
        <DatePicker onSelect={dateSelected} fieldType="date"></DatePicker>

        <H4>DatePicker</H4>
        <DatePicker onSelect={dateSelected} fieldType="text"></DatePicker>
        
        <H4>HtmlPicker</H4>
        <HtmlPicker></HtmlPicker>
    </Sheet>;
}
export default DatePickerPage;
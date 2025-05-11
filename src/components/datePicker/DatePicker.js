import React, {useState,useRef, useEffect,useImperativeHandle} from 'react';
import datepicker from './datepicker.module.css';
//import console = require('console');
let oneDay = 60 * 60 * 24 * 1000;
//Date.now()-return milliseconds from midnight 1970 january 1 UTC
/*new Date().getTimezoneOffset() will return the difference between UTC time and local time in minutes.
I.e GMT+2 ,-120 will be return
*/
let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);
const DatePicker = React.forwardRef((props,ref) => {  
    const myElementRef = useRef(null);
    const inputRef = useRef();  
    const [showDatePicker,setShowDatePicker] = useState(false);
    const [selectedDay,setSelectedDay] = useState();
    const [stYear,setStYear] = useState();
    const [stMonth,setStMonth] = useState();
    const [stMonthDetails,setStMonthDetails] = useState();

    const addBackDrop = (e) => {
        console.log("event fired");
        if(!myElementRef.current.contains(e.target)) {
            //console.log("c");
            setShowDatePicker(false);
        }
    }
    useEffect(() => {
        //window.removeEventListener('click',addBackDrop);
        window.addEventListener('click', addBackDrop);
        return () => {
            window.removeEventListener('click',addBackDrop); // Remove listener
            //console.log('Event listener removed.');
          };
    }, [props]);

    const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    

    const getMonthDetails =(year, month)=> {
        let firstDay = (new Date(year, month)).getDay();//first day of the month
        let numberOfDays = this.getNumberOfDays(year, month);
        let monthArray = [];
        let rows = 6;
        let currentDay = null;
        let index = 0;//Date Index of the month 0-31
        let cols = 7;
 
 
        for(let row=0; row<rows; row++) {
            for(let col=0; col<cols; col++) {
                currentDay = this.getDayDetails({
                    index,//Date Index of the month 0-31
                    numberOfDays,
                    firstDay,
                    year,
                    month
                });
                monthArray.push(currentDay);
                index++;
            }
        }
        return monthArray;
    }


    const getDayDetails =args=> {
        let date = args.index - args.firstDay;
        let day = args.index%7;
        let prevMonth = args.month-1;
        let prevYear = args.year;
        if(prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        let prevMonthNumberOfDays = this.getNumberOfDays(prevYear, prevMonth);
        let _date = (date < 0 ? prevMonthNumberOfDays+date : date % args.numberOfDays) + 1;
        let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        let timestamp = new Date(args.year, args.month, _date).getTime();
        return {
            date: _date,
            day,
            month,
            timestamp,
            dayString: this.daysMap[day]
        }
    }
    //give number of days for the month
    const getNumberOfDays =(year, month)=> {
        return 40 - new Date(year, month, 40).getDate();
    }

    //put date details in to an array from a date string in format yyyy-mm-dd
    const getDateFromDateString =dateValue=> {
        let dateData = dateValue.split('-').map(d=>parseInt(d, 10));
        if(dateData.length < 3) return null;
        let year = dateData[0];
        let month = dateData[1];
        let date = dateData[2];
        return {year, month, date};
    }


    /* ‘month’ parameter will be integer index of the month
    -if month value is greater than 11 then it will return 11.
    -Otherwise it will compare the month value with 0.if month value greater than 0 it will return string for the given index.if 0 is greater than themonth value then it will return string “month”.*/
    const getMonthStr = month => this.monthMap[Math.max(Math.min(11, month), 0)] || 'Month';
    
    const setYear =offset=> {
        let wk_year = stYear + offset;
        let wk_month = stMonth;
        setStMonthDetails(getMonthDetails(wk_year, wk_month));
        setStYear(wk_year);
    }

    /*The getTime() method of Date instances returns the number of milliseconds for this date since the midnight at the beginning of January 1, 1970, UTC.*/
    const setDate =dateData=> {
        let selectedDay = new Date(dateData.year, dateData.month-1, dateData.date).getTime();
        //this.setState({ selectedDay })
        setSelectedDay(selectedDay)
        /*call callback method when time changes out of the cmponent*/
        /*
        if(this.props.onChange) {
            this.props.onChange(selectedDay);
        }
       */ 
    }

    const updateDateFromInput =()=> {
        let dateValue = inputRef.current.value;
        let dateData = getDateFromDateString(dateValue);
        if(dateData !== null) { 
            setDate(dateData);
            /*
            this.setState({ 
                year: dateData.year, 
                month: dateData.month-1, 
                monthDetails: this.getMonthDetails(dateData.year, dateData.month-1)
            });
            */
            setStYear(dateData.year);
            setStMonth(dateData.month-1);
            setStMonthDetails(dateData.year, dateData.month-1)
        }
    }

    return (
        <div ref={myElementRef} className={datepicker.MyDatePicker}>
            <div className={datepicker.mdpInput} onClick={()=> setShowDatePicker(true)}>
                <input type='date' onChange={updateDateFromInput} ref={inputRef}/>
            </div>
            {showDatePicker ? (
            <div className={datepicker.mdpContainer}>
                <div className={datepicker.mdpcHead}>
                    <div className={datepicker.mdpchButton}>
                        <div className={datepicker.mdpchbInner} onClick={()=> setYear(-1)}>
                            <span className={datepicker.mdpchbiLeftArrows}></span>
                        </div>
                    </div>
                    <div className={datepicker.mdpchButton}>
                        <div className={datepicker.mdpchbInner} onClick={()=> this.setMonth(-1)}>
                            <span className={datepicker.mdpchbiLeftArrow}></span>
                        </div>
                    </div>
                </div>
            </div>    
            ) : ''}
        </div>
    )
});
export default DatePicker;
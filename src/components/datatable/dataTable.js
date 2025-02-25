import React from 'react';
import DtStyles from './datatable.module.css';

import {thirdController} from '../../controllers/ThiredController';
import {color} from '../comp.properties.js';
import {shape} from '../comp.properties.js';
import Pagination from '../pagination/pagination';
import {RSelect,ROption} from '../replix.select/replixselect';
import {bootstrapGrid} from '../comp.properties.js';
import FrontEndDataManipulator from './FrontEndDataManipulator.js';
import ServerSideDataManager from './ServerSideDataManager.js';
class DataTable extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            allrawData: "",
            headersArray: "",
            iconArray: [],
            currentPage:1,
            totalPages:0,
            totalRecords:0
        };
        this.keyArray=[];//each raw object have key value paire .so this is the array of keys for a raw.
        this.iconArray= [];
        this.sortManager = this.sortManager.bind(this);
        this.newPageManager = this.newPageManager.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changePageLength = this.changePageLength.bind(this);
        this.changeSearchText = this.changeSearchText.bind(this);

        this.requestedPage = 0;
        this.sortedColumn = "";
        this.sortedOrder = "ascending";
        this.searchedword = "";
        this.changedCriteria = "";

        //----------actual representation -------------//
        this.pageLength = 10;//current page Length
        this.currentPage = 0;//current Page
        this.totalPages = 0;//current Total Pages
    }
    
    componentDidMount(){
        //console.log("------ did mount");
       if(this.props.pagination == "frontend"){
        //console.log("------ frontend");
         this.manipulator = new FrontEndDataManipulator(this.props);
         this.getInitialData();
        }
        else if(this.props.pagination == "serverSide"){
            this.manipulator = new ServerSideDataManager(this.props);
            this.getInitialData();
        }
        else if(!this.props.pagination){
            //default type is frontend pagination
            this.manipulator = new FrontEndDataManipulator(this.props);
            this.getInitialData();
        }
        else {
            console.error("given pagination type is unknown");
        }
    }
    
    async getInitialData(){
        var tableData ;
        tableData = await this.manipulator.getInitialData(10);
        this.iconArray = new Array(tableData.headersArray.length);
        this.populateKeyArray(tableData.headersArray);  
        this.currentPage = 1;
        this.totalPages = tableData.totalPages;
        this.setState({allrawData: tableData.allrawData,headersArray: tableData.headersArray,iconArray:this.iconArray,currentPage: 1,totalPages:tableData.totalPages,totalRecords:tableData.totalRecords});
        //console.log("tableData -- " ,tableData);
    }
    sortManager(e){
        let tempArray;
        let cellIndex = e.target.cellIndex;
        let arrayIndex;
        if(this.isEven(cellIndex)){
            arrayIndex = ((cellIndex+2)/2)-1;
            tempArray=this.decideAscendingOrDescending(arrayIndex);
        }
        else{
            arrayIndex = ((cellIndex+1)/2)-1;
            tempArray=this.decideAscendingOrDescending(arrayIndex);
        }
        // ⏲ ☎ https://en.wikipedia.org/wiki/List_of_Unicode_characters
        let key=this.keyArray[arrayIndex];
        this.sortedColumn = key;
        this.sortedOrder = tempArray[1];
        this.changedCriteria = "order";
        //let pageData = this.manipulator.getData(key,tempArray[1],this.searchedword,this.pageLength,this.requestedPage,this.changedCriteria)//--------------------need to add more parameters
        //this.currentPage = pageData.pageNumber;
        //this.totalPages = pageData.totalPages;
        this.newPageManager();
        this.iconArray = tempArray[0];
        //this.setState({iconArray:tempArray[0]});
        //this.setState({allrawData:pageData.tableData,currentPage: pageData.pageNumber,totalPages:pageData.totalPages,iconArray:this.iconArray});
    }
    isEven(n){
        return n % 2 == 0;
    }

    decideAscendingOrDescending(arrayIndex){
        let tempIconArray= this.state.iconArray;
        let icon = '';
        let orderToSort;
        if(tempIconArray[arrayIndex] == '▾'){
            icon='▴';
            orderToSort = "ascending";
        }
        else{
            icon='▾';
            orderToSort = "descending";
        }
        tempIconArray.fill('');
        tempIconArray[arrayIndex]=icon;
        return [tempIconArray,orderToSort];
    }
    /*
    sortArrayAscending(arrayIndex) {
        let tempDataArray = this.state.allrawData;
        let key=this.keyArray[arrayIndex];
        tempDataArray.sort(function(a, b){
          var x = a[key].toString().toLowerCase();
          var y = b[key].toString().toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        return tempDataArray;
    }
    sortArrayDescending(arrayIndex) {
        let tempDataArray = this.state.allrawData;
        let key=this.keyArray[arrayIndex];
        tempDataArray.sort(function(a, b){
          var x = a[key].toString().toLowerCase();
          var y = b[key].toString().toLowerCase();
          if (x > y) {return -1;}
          if (x < y) {return 1;}
          return 0;
        });
        return tempDataArray;
    }
    */
    populateKeyArray(headersArray)
    {
        for (let i = 0; i < headersArray.length; i++) {
                this.keyArray.push(headersArray[i].map);
                //console.log("key------------------",key);
        }
    }

    //ToDo : logics inside this function should move inside pagination class.only requesting page number shuld come out from pagination module .
    //ToDo : within pagination it should check if result page number is grater than total page number.if it true,current page number is the total page number
    async newPageManager(){
        console.debug("----------------------------------------------");//Trace
        console.debug("props.getPageData------",this.props.getPageData);//Trace
        //let getPageData = await this.props.getPageData; 
        let pageData = this.manipulator.getData(this.sortedColumn,this.sortedOrder,this.searchedword,this.pageLength,this.requestedPage,this.changedCriteria);
        
        this.currentPage = pageData.pageNumber;
        //console.log("this.currentPage",this.currentPage);
        this.totalPages = pageData.totalPages;
        this.setState({allrawData:pageData.tableData,currentPage: pageData.pageNumber,totalPages:pageData.totalPages,totalRecords:pageData.totalRecords,iconArray:this.iconArray});
    }
    changePageLength(index,requestedPageLength,lable){
        console.debug("----------------------------------------------");//Trace
        console.debug("index,value,lable--------------------",index + " " + requestedPageLength + " " + lable);//Trace
        
        this.changedCriteria = "pagesize";
        let currentPageFirstRawIndex = ((this.currentPage-1) * this.totalPages) + 1 ;
        if((currentPageFirstRawIndex % requestedPageLength) > 0){
            this.requestedPage = (Math.floor(currentPageFirstRawIndex/requestedPageLength)) +1;
        }
        else{
            this.requestedPage = Math.floor(currentPageFirstRawIndex/requestedPageLength);
        }
        //console.log("this.requestedPage---------------------------------",this.requestedPage);
        this.pageLength = requestedPageLength;
        this.newPageManager();
    }
    changePage(requestedPage){
        this.changedCriteria = "pageNumber";
        this.requestedPage = requestedPage;
        this.newPageManager();
    }
    changeSearchText(e){
        //console.log("on key up--------------------",e.target.value);
        this.changedCriteria = "wordToSearch";
        this.searchedword = e.target.value;
        this.newPageManager();
    }
    render()
    { 
       //------------------------------------table By Object Array ----------------------//
        let startIndex = ((this.currentPage - 1) * this.pageLength ) + 1 ;
        let endIndex = parseFloat(startIndex) + parseFloat(this.pageLength) -1;
        if(endIndex > this.state.totalRecords) endIndex = this.state.totalRecords;

        var tableHeaders = [];
        var tableRaws = [];
        if(this.state.allrawData && this.state.headersArray){
            //console.debug("----------------------------------------------",this.state);
            var headersArray = this.state.headersArray; 
            var i;
            for (i = 0; i < headersArray.length; i++) {
                tableHeaders.push(<th onClick={this.sortManager} key={i+"t"}>{headersArray[i].name}</th>);
                tableHeaders.push(<th onClick={this.sortManager} key={i+"i"} className={DtStyles.headerIcon}>{this.state.iconArray[i]}</th>);
            }
            var allrawData = this.state.allrawData;
            for (i = 0; i < allrawData.length; i++) {
                //var j;
                var tds = [];
                /*
                for (j = 0; j < headersArray.length; j++){
                    tds.push(<td colSpan={2} key={j}>{allrawData[i][j]}</td>)
                }
                */
               for (let j = 0; j < this.keyArray.length; j++){ 
                    if (allrawData[i].hasOwnProperty(this.keyArray[j])) { 
                        tds.push(<td colSpan={2} key={this.keyArray[j]}>{allrawData[i][this.keyArray[j]]}</td>)
                        
                    } 
                } 
                tableRaws.push(<tr key={i}>{tds}</tr>);
            }
        }
        let componentWidth;
        if(this.props.width){
            componentWidth = this.props.width;
        }
        else{
            componentWidth = "100%";
        }
        return[
            <div key={"0"} className={DtStyles.tableFooter} style={{maxWidth: componentWidth}}>
                 <div className={DtStyles.pageLength}  style={{maxheight: "30px"}}>
                     <RSelect onSelect={this.changePageLength}>
                         <ROption value="10" selected={true}>10</ROption>
                         <ROption value="25">25</ROption>
                         <ROption value="50">50</ROption>
                         <ROption value="100">100</ROption>
                     </RSelect>
                </div>
                 <div className={DtStyles.pagination}>
                     <div className={DtStyles.searchFieldInnerContainer} >Search{'\u00A0'}{'\u00A0'}<input onKeyUp={this.changeSearchText} className={ DtStyles.searchField + " " +color.formField+ " " + shape.formField} type="text" name="fname" placeholder="🔍&#xFE0E;"/></div>
                </div>
            </div>,
            <div key={"1"} className={DtStyles.tableContainer} >
                <table className={DtStyles.theTable}  style={{width: componentWidth}} >
                    <thead>
                        <tr>{tableHeaders}</tr>
                    </thead>
                    <tbody>
                        {tableRaws}
                    </tbody>
                </table>
            </div>,
           <div key={"2"} className={DtStyles.tableFooter} style={{maxWidth: componentWidth}}>
               <div className={DtStyles.tableInfo}>Showing {startIndex} to {endIndex} of {this.state.totalRecords} entries</div>
               <div className={DtStyles.pagination}>
                   <Pagination key={"1"} pageClick={this.changePage} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
                </div>
            </div>
        ];
    }
}
export default DataTable;
import Sheet from '../../components/sheet/sheet';
import React from 'react';
import DataTable from '../../components/datatable/dataTable';
const DateTablePage = (props) => { 

    const initialData = ()=>{
        //console.log("testFunction");
        //var data = jq.get( "https://reqres.in/api/users?page=2");
        //console.log("testFunction data----- " ,data);
        var tableData = {};
        var headersArray = ["Header1","Header2","Heade3"];
        var raw1Data = ["rawData1","rawData2","rawData3"];
        var raw2Data = ["rawData4","rawData5","rawData6"];
        
        var allrawData = [];
        allrawData.push(raw1Data);
        allrawData.push(raw2Data);
        var cars = [
            {x:"Volvo",type:"Volvo", year:2016},
            {x:"Volvo",type:"Saab", year:2001},
            {x:"Volvo",type:"bMW", year:2010}
          ];
        tableData.headersArray = headersArray; 
        //tableData.allrawData = allrawData;
        tableData.allrawData = cars;
        //console.log("ServiceData--------",tableData);
        return tableData;
    }
    const findTablePageTestData =  (pageNumber,pageLength)=>{
      console.log("pageLength",pageLength);
        //var data = jq.get( "https://reqres.in/api/users?page=2");
        //console.log("testFunction data " ,data);
        var tableData = {};
        var headersArray = ["Header1","Header2","Heade3"];
        var raw1Data = ["rawData1","rawData2","rawData3"];
        var raw2Data = ["rawData4","rawData5","rawData6"];
        
        var allrawData = [];
        allrawData.push(raw1Data);
        allrawData.push(raw2Data);
        let cars;
        if(pageNumber == 1){
          cars = [
            {x:"Volvo",type:"Volvo", year:2016},
            {x:"Volvo",type:"Saab", year:2001},
            {x:"Volvo",type:"bMW", year:2010}
          ];
        }
        else if(pageNumber == 2){
          cars = [
            {x:"Vwerrt",type:"Volvo", year:2016},
            {x:"Tasddw",type:"Saab", year:2001},
            {x:"Volvo",type:"bMW", year:2010}
          ];
        }
        else if(pageLength == 25){
          cars = [
            {x:"Vwerrt",type:"Volvo", year:2016},
            {x:"Tasddw",type:"Saab", year:2001},
            {x:"Volvo",type:"bMW", year:2010},            
            {x:"Vwerrt",type:"Volvo", year:2016},
            {x:"Tasddw",type:"Saab", year:2001},
            {x:"Volvo",type:"bMW", year:2010}
          ];
        }
        else{
          cars = [
            {x:"Vto",type:"tondo", year:1916},
            {x:"Tasdf",type:"Saab", year:1801},
            {x:"Volvo",type:"Beta", year:2010}
          ];
        }

        tableData.headersArray = headersArray; 
        //tableData.allrawData = allrawData;
        tableData.allrawData = cars;
        //console.log("ServiceData--------",tableData);
        let pageData = {};
        pageData.pageNumber = pageNumber;
        pageData.tableData  = tableData;
        pageData.totalPages  = 102;
        return pageData;
    }
    const allTableData =  ()=>{
      var tableData = {};
      var headersArray = [
        {name:"Header1",map:"x"},
        {name:"Header2",map:"type"},
        {name:"Header3",map:"year"},
      ];
      var cars = [
          {type:"Car",x:"Volvo", year:2016},
          {x:"Mitsubishi",year:2001,type:"Montero"},
          {x:"Toyota",type:"Axio", year:2010},
          {x:"Toyota",type:"Prado", year:2016},
          {x:"BMW",type:"EX6", year:2001},
          {x:"Toyota",type:"Prias", year:2010},
          {x:"Toyota",type:"Aqua", year:2016},
          {x:"Honda",type:"Vessel", year:2001},
          {x:"Honda",type:"hybrid car", year:2010},
          {x:"Honda",type:"civic", year:2016},
          {x:"Honda",type:"CRZ", year:2001},
          {x:"Toyota",type:"Corolla", year:2010},
          {x:"Toyota",type:"Yaris", year:2016},
          {x:"Toyota",type:"Suprim", year:2001},
          {x:"Bajaj",type:"Hustler", year:2010},
          {x:"Toyota",type:"VagonR", year:2016},
          {x:"Ashok Layland",type:"Bus", year:2001},
          {x:"Tata",type:"Bus", year:2010},
          {x:"Rosa",type:"Bus", year:2016},
          {x:"Fuso",type:"Bus", year:2001},
          {x:"Demo",type:"Butta", year:2010},
          {x:"Lambogini",type:"Avetardo", year:2016},
          {x:"Lambogini",type:"Marcelego", year:2001},
          {x:"Lambogini",type:"Galado", year:2010}
        ];
      tableData.headersArray = headersArray; 
      tableData.allrawData = cars;
      return tableData;
  }
  const testFunction =  ()=>{
    //console.log("testFunction");
    //var data = jq.get( "https://reqres.in/api/users?page=2");
    //console.log("testFunction data " ,data);
    var tableData = {};
    //var headersArray = ["Header1","Header2","Heade3"];
    var headersArray = [
      {name:"Header1",map:"x"},
      {name:"Header2",map:"type"},
      {name:"Header3",map:"year"},
    ];
    var raw1Data = ["rawData1","rawData2","rawData3"];
    var raw2Data = ["rawData4","rawData5","rawData6"];
    
    var allrawData = [];
    allrawData.push(raw1Data);
    allrawData.push(raw2Data);
    var cars = [
        {type:"Volvo",x:"Volvo", year:2016},
        {x:"Volvo",year:2001, type:"Saab"},
        {x:"Volvo",type:"bMW", year:2010}
      ];
    tableData.headersArray = headersArray; 
    //tableData.allrawData = allrawData;
    tableData.allrawData = cars;
    //console.log("ServiceData--------",tableData);
    return tableData;
}
    return <Sheet>

<DataTable 
        getPageData={findTablePageTestData} 
        getInitialValues={allTableData} 
        width="700px"
    />
    <DataTable 
        pagination = "serverSide"
        getPageData={findTablePageTestData} 
        getInitialValues={testFunction} 
        width="700px"
    />
    </Sheet>
}
export default DateTablePage;
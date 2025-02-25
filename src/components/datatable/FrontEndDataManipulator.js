import PageDataDto from './pageDataDto.js'

class FrontEndDataManipulator{
    //we provide only bulk search and bulk sort for both server side and fornt end paginations.
    //(because no one will sort or search in specific page to find data)
    constructor(props){
        this.props= props;
        this.originalDataSet;
        this.resultSet;
        this.columnToSort ;
        this.orderToSort;
        this.wordToSearch = "";
        this.search = this.search.bind(this);
        this.getTotalPages = this.getTotalPages.bind(this);
        this.totalPages = 0;
        this.totalRecords = 0;
    }
    
    async getInitialData(pagesize){
      //console.log("getInitialData FrontEndDataManipulator --------------------" + this.props.getInitialValues);
      let initialDataSource = await this.props.getInitialValues;
      let tableData = initialDataSource();
      this.originalDataSet = tableData.allrawData;
      this.resultSet = this.originalDataSet;
      tableData.allrawData = this.getPageData(this.originalDataSet,1,10)
      this.totalPages = this.getTotalPages(this.originalDataSet,pagesize);
      tableData['totalPages'] = this.totalPages;
      tableData['totalRecords'] = this.originalDataSet.length;
      return tableData
    }

    getData(columnToSort,orderToSort,wordToSearch,pagesize,pageNumber,changedCriteria) {
      //console.log("pagesize::::::::::::::: ",pagesize);
      let pageDataDto = new PageDataDto();
        if(changedCriteria == "order"){
            //sort result set
            let sortedArray;
          //  if(this.resultSet){
              pageDataDto.totalPages = this.getTotalPages(this.resultSet,pagesize);
              if(orderToSort == "ascending"){
                sortedArray = this.sortArrayAscending(columnToSort,this.resultSet);
              }
              else if(orderToSort == "descending"){
                sortedArray = this.sortArrayDescending(columnToSort,this.resultSet);
              }
           // }
           /*
            else{
              pageDataDto.totalPages = this.getTotalPages(searcResult,pagesize);
              if(orderToSort == "ascending"){
                sortedArray = this.sortArrayAscending(columnToSort,this.originalDataSet);
              }
              else if(orderToSort == "descending"){
                sortedArray = this.sortArrayDescending(columnToSort,this.originalDataSet);
              }
            }*/
            //assigne result data to result set
            this.resultSet = sortedArray;
            //page number will be 1 for given page size
            pageDataDto.pageNumber = 1;
            //extract the page data from resultset
            pageDataDto.tableData = this.getPageData(sortedArray,1,pagesize);
            pageDataDto.totalRecords = this.resultSet.length;
            this.columnToSort = columnToSort;
            this.orderToSort = orderToSort;  
            return  pageDataDto;
        }else if(changedCriteria == "wordToSearch"){
            let wordToSearchUpperCase = wordToSearch.toString().toUpperCase()
            let searcResult ;
            if ((this.wordToSearch != "") && (wordToSearchUpperCase.indexOf(this.wordToSearch) > -1)) {
                console.log("search in result set");
                searcResult = this.search(this.resultSet,wordToSearch);
                this.wordToSearch = wordToSearchUpperCase;
            }
            else{
                console.log("search original data set");
                searcResult = this.search(this.originalDataSet,wordToSearch); 
                this.wordToSearch = wordToSearchUpperCase;
            }
            pageDataDto.pagesize = pagesize;
            pageDataDto.tableData = this.getPageData(searcResult,1,pagesize);
            this.resultSet=searcResult;
            pageDataDto.pageNumber = 1;
            this.totalPages = this.getTotalPages(searcResult,pagesize);
            pageDataDto.totalPages = this.totalPages;
            pageDataDto.totalRecords = this.resultSet.length;
        }else if(changedCriteria == "pageNumber"){
            if(this.resultSet){
                if(this.totalPages < pageNumber) {
                    pageNumber = this.totalPages;
                }
                else if(pageNumber < 1){
                    pageNumber = 1;
                }
                pageDataDto.tableData = this.getPageData(this.resultSet,pageNumber,pagesize);
            }
            else{
              pageDataDto.pageNumber = pageNumber;
              if(this.totalPages < pageNumber) {
                  pageNumber = this.totalPages;
              }
              else if(pageNumber < 1){
                  pageNumber = 1;
              }
              pageDataDto.tableData = this.getPageData(this.originalDataSet,pageNumber,pagesize);
          }
          pageDataDto.pageNumber = pageNumber;
          pageDataDto.totalPages = this.totalPages;
          pageDataDto.totalRecords = this.resultSet.length;
          return  pageDataDto;
        }else if(changedCriteria == "pagesize"){
            this.totalPages = this.getTotalPages(this.resultSet,pagesize);
            pageDataDto.totalPages = this.totalPages;
            pageDataDto.tableData = this.getPageData(this.resultSet,pageNumber,pagesize);
            pageDataDto.pageNumber = pageNumber;
            pageDataDto.totalRecords = this.resultSet.length;
            
            //extract the page data from resultset
        }
        return  pageDataDto;
    }
    getTotalPages(array,pagesize){
      let totalPages=0;
      if((array.length % pagesize) == 0){
        totalPages = (array.length/pagesize);
       }
       else{
        totalPages = Math.floor(array.length/pagesize) + 1;
       }
       return totalPages;
    }
    search(array,wordToSearch) {
      let searchWordInUpperCase = wordToSearch.toString().toUpperCase()
      console.log("array" , array);
        let resultset = [];
        let j = 0;
        for (let i = 0; i < array.length; i++) {
          for (const key in array[i]) {
            let searchIn  = array[i][key];
            if (searchIn.toString().toUpperCase().indexOf(searchWordInUpperCase) > -1) {
              console.log("came in");
              resultset[j] = array[i];
              j++;
              break;
            }
            //console.log(`${key}: ${array[i][key]}`);
          }
        }
        return resultset;
      }
      sortArrayAscending(key,tempDataArray) {
        tempDataArray.sort(function(a, b){
          var x = a[key].toString().toLowerCase();
          var y = b[key].toString().toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        return tempDataArray;
    }
    sortArrayDescending(key,tempDataArray) {
        tempDataArray.sort(function(a, b){
          var x = a[key].toString().toLowerCase();
          var y = b[key].toString().toLowerCase();
          if (x > y) {return -1;}
          if (x < y) {return 1;}
          return 0;
        });
        return tempDataArray;
    }
    getPageData(array,pagenumber,pagesize){
      let startIndex = ((pagenumber-1) * pagesize);
      let endIndex = startIndex + parseFloat(pagesize);
      console.log("start index ",startIndex,"End Index ",endIndex)
      return array.slice(startIndex, endIndex);
    }

}
export default FrontEndDataManipulator;



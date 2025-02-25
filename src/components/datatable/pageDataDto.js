class PageDataDto{
    constructor(tableData, pageNumber,totalPages,totalRecords) {
        this.tableData = tableData;
        this.pageNumber = pageNumber;
        this.totalPages = totalPages;
        this.totalRecords = totalRecords;
      }
}
export default PageDataDto;
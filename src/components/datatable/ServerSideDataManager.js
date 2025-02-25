class ServerSideDataManager{
    constructor(props) {
        this.props= props;
    }
    async getInitialData(pagesize){
        console.log("getInitialData ServerSideDataManager --------------------" + this.props.getInitialValues);
        let initialDataSource = await this.props.getInitialValues;
        let tableData = initialDataSource();
        return tableData
      }
    async getData(columnToSort,orderToSort,wordToSearch,pagesize,pageNumber,changedCriteria) {
        let getPageData = await this.props.getPageData; 
        let pageData = getPageData(this.requestedPage,this.pageLength,pageNumber);
    }
}
export default ServerSideDataManager;

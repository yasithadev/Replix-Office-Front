import React from 'react';
//import {thirdController} from '../../controllers/ThiredController';
import pgStyle from './pagination.module.css';

class Pagination extends React.Component{
    constructor(props) {
        super(props);
        this.pageClick = this.pageClick.bind(this);
    }
    arrangeButtons(){
        console.log(this.props);
        let buttons ;
        
        if(this.props.totalPages < 8){
            buttons =[];
            buttons.push(<li key={"0"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-1)} ><div className={pgStyle.paginationlUlLiDiv}  >{"<"}</div></li>);
            for(let i=0 ;i < this.props.totalPages ;i++){
                if((i+1) == this.props.currentPage){
                    //selected
                    buttons.push(<li key={(i+ 1)+""} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(i+1)} ><div className={pgStyle.paginationlUlLiDiv + " " + pgStyle.active}  >{i+1}</div></li>);
                }
                else{
                    //no selected
                    buttons.push(<li key={(i+ 1)+""} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(i+1)} ><div className={pgStyle.paginationlUlLiDiv}  >{i+1}</div></li>);
                }
            }
            buttons.push(<li key={"8"} className={pgStyle.paginationUlLi}><div className={pgStyle.paginationlUlLiDiv} onClick={()=>this.pageClick(-2)} >{">"}</div></li>);
        }
        else{
            if(this.props.currentPage  == 1){
                buttons =  [<li key={"0"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-1)} ><div className={pgStyle.paginationlUlLiDiv}  >{"<"}</div></li>,
                <li key={"1"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(1)}  ><div className={pgStyle.paginationlUlLiDiv + " " + pgStyle.active}>1</div></li>,
                <li key={"2"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(2)}><div className={pgStyle.paginationlUlLiDiv} >2</div></li>,
                <li key={"3"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(3)}><div className={pgStyle.paginationlUlLiDiv} >3</div></li>,
                <li key={"4"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(4)}><div className={pgStyle.paginationlUlLiDiv} >4</div></li>,
                <li key={"5"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(5)}><div className={pgStyle.paginationlUlLiDiv} >5</div></li>,
                <li key={"6"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(0)}><div className={pgStyle.paginationlUlLiDiv} >...</div></li>,
                <li key={"7"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages)}><div className={pgStyle.paginationlUlLiDiv} >{this.props.totalPages}</div></li>,
                <li key={"8"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-2)}><div className={pgStyle.paginationlUlLiDiv} >{">"}</div></li>];
            }
            else if(this.props.currentPage  == 2){
                buttons =  [<li key={"0"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-1)} ><div className={pgStyle.paginationlUlLiDiv}  >{"<"}</div></li>,
                <li key={"1"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(1)}  ><div className={pgStyle.paginationlUlLiDiv}>1</div></li>,
                <li key={"2"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(2)} ><div className={pgStyle.paginationlUlLiDiv + " " + pgStyle.active} >2</div></li>,
                <li key={"3"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(3)} ><div className={pgStyle.paginationlUlLiDiv} >3</div></li>,
                <li key={"4"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(4)} ><div className={pgStyle.paginationlUlLiDiv} >4</div></li>,
                <li key={"5"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(5)} ><div className={pgStyle.paginationlUlLiDiv} >5</div></li>,
                <li key={"6"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(0)} ><div className={pgStyle.paginationlUlLiDiv} >...</div></li>,
                <li key={"7"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages)} ><div className={pgStyle.paginationlUlLiDiv} >{this.props.totalPages}</div></li>,
                <li key={"8"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-2)} ><div className={pgStyle.paginationlUlLiDiv} >{">"}</div></li>];
            }
            else if(this.props.currentPage  == 3){
                buttons =  [<li key={"0"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-1)} ><div className={pgStyle.paginationlUlLiDiv}  >{"<"}</div></li>,
                <li key={"1"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(1)}  ><div className={pgStyle.paginationlUlLiDiv}>1</div></li>,
                <li key={"2"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(2)} ><div className={pgStyle.paginationlUlLiDiv} >2</div></li>,
                <li key={"3"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(3)} ><div className={pgStyle.paginationlUlLiDiv + " " + pgStyle.active} >3</div></li>,
                <li key={"4"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(4)} ><div className={pgStyle.paginationlUlLiDiv} >4</div></li>,
                <li key={"5"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(5)} ><div className={pgStyle.paginationlUlLiDiv} >5</div></li>,
                <li key={"6"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(0)} ><div className={pgStyle.paginationlUlLiDiv} >...</div></li>,
                <li key={"7"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages)} ><div className={pgStyle.paginationlUlLiDiv} >{this.props.totalPages}</div></li>,
                <li key={"8"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-2)} ><div className={pgStyle.paginationlUlLiDiv} >{">"}</div></li>];
            }
            else if(this.props.currentPage  == 4){
                buttons =  [<li key={"0"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-1)} ><div className={pgStyle.paginationlUlLiDiv}  >{"<"}</div></li>,
                <li key={"1"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(1)}  ><div className={pgStyle.paginationlUlLiDiv}>1</div></li>,
                <li key={"2"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(2)} ><div className={pgStyle.paginationlUlLiDiv} >2</div></li>,
                <li key={"3"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(3)} ><div className={pgStyle.paginationlUlLiDiv} >3</div></li>,
                <li key={"4"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(4)} ><div className={pgStyle.paginationlUlLiDiv  + " " + pgStyle.active} >4</div></li>,
                <li key={"5"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(5)} ><div className={pgStyle.paginationlUlLiDiv} >5</div></li>,
                <li key={"6"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(0)} ><div className={pgStyle.paginationlUlLiDiv} >...</div></li>,
                <li key={"7"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages)} ><div className={pgStyle.paginationlUlLiDiv} >{this.props.totalPages}</div></li>,
                <li key={"8"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-2)}><div className={pgStyle.paginationlUlLiDiv} >{">"}</div></li>];
            }
            else if(this.props.currentPage == (this.props.totalPages-3)){
                buttons =  [<li key={"0"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-1)}><div className={pgStyle.paginationlUlLiDiv}  >{"<"}</div></li>,
                <li key={"1"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(1)} ><div className={pgStyle.paginationlUlLiDiv}>1</div></li>,
                <li key={"2"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(0)}><div className={pgStyle.paginationlUlLiDiv}>...</div></li>,
                <li key={"3"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 4)}><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 4}</div></li>,
                <li key={"4"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 3)}><div className={pgStyle.paginationlUlLiDiv  + " " + pgStyle.active}>{this.props.totalPages - 3}</div></li>,
                <li key={"5"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 2)}><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 2}</div></li>,
                <li key={"6"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 1)}><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 1}</div></li>,
                <li key={"7"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages)}><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages}</div></li>,
                <li key={"8"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-2)}><div className={pgStyle.paginationlUlLiDiv}>{">"}</div></li>];
            }
            else if(this.props.currentPage == (this.props.totalPages-2)){
                buttons =  [<li key={"0"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-1)} ><div className={pgStyle.paginationlUlLiDiv}  >{"<"}</div></li>,
                <li key={"1"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(1)} ><div className={pgStyle.paginationlUlLiDiv}>1</div></li>,
                <li key={"2"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(0)} ><div className={pgStyle.paginationlUlLiDiv}>...</div></li>,
                <li key={"3"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 4)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 4}</div></li>,
                <li key={"4"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 3)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 3}</div></li>,
                <li key={"5"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 2)} ><div className={pgStyle.paginationlUlLiDiv  + " " + pgStyle.active}>{this.props.totalPages - 2}</div></li>,
                <li key={"6"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 1)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 1}</div></li>,
                <li key={"7"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages}</div></li>,
                <li key={"8"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-2)} ><div className={pgStyle.paginationlUlLiDiv}>{">"}</div></li>];
            }
            else if(this.props.currentPage == (this.props.totalPages-1)){
                buttons =  [<li key={"0"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-1)} ><div className={pgStyle.paginationlUlLiDiv}  >{"<"}</div></li>,
                <li key={"1"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(1)} ><div className={pgStyle.paginationlUlLiDiv}>1</div></li>,
                <li key={"2"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(0)} ><div className={pgStyle.paginationlUlLiDiv}>...</div></li>,
                <li key={"3"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 4)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 4}</div></li>,
                <li key={"4"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 3)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 3}</div></li>,
                <li key={"5"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 2)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 2}</div></li>,
                <li key={"6"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 1)} ><div className={pgStyle.paginationlUlLiDiv + " " + pgStyle.active}>{this.props.totalPages - 1}</div></li>,
                <li key={"7"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages}</div></li>,
                <li key={"8"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-2)} ><div className={pgStyle.paginationlUlLiDiv}>{">"}</div></li>];
            }
            else if(this.props.currentPage == (this.props.totalPages)){
                buttons =  [<li key={"0"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-1)} ><div className={pgStyle.paginationlUlLiDiv}  >{"<"}</div></li>,
                <li key={"1"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(1)} ><div className={pgStyle.paginationlUlLiDiv}>1</div></li>,
                <li key={"2"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(0)} ><div className={pgStyle.paginationlUlLiDiv}>...</div></li>,
                <li key={"3"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 4)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 4}</div></li>,
                <li key={"4"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 3)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 3}</div></li>,
                <li key={"5"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 2)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 2}</div></li>,
                <li key={"6"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 1)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages - 1}</div></li>,
                <li key={"7"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages)} ><div className={pgStyle.paginationlUlLiDiv + " " + pgStyle.active}>{this.props.totalPages}</div></li>,
                <li key={"8"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-2)} ><div className={pgStyle.paginationlUlLiDiv}>{">"}</div></li>];
            }
            else if(this.props.currentPage > (this.props.totalPages)){
                buttons =  [<li key={"0"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-1)} ><div className={pgStyle.paginationlUlLiDiv}  >{"<"}</div></li>,
                <li key={"1"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(1)} ><div className={pgStyle.paginationlUlLiDiv}>1</div></li>,
                <li key={"2"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(0)} ><div className={pgStyle.paginationlUlLiDiv}>...</div></li>,
                <li key={"3"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 4)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.currentPage - 4}</div></li>,
                <li key={"4"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 3)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.currentPage - 3}</div></li>,
                <li key={"5"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 2)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.currentPage - 2}</div></li>,
                <li key={"6"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages - 1)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.currentPage - 1}</div></li>,
                <li key={"7"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages)} ><div className={pgStyle.paginationlUlLiDiv + " " + pgStyle.active}>{this.props.currentPage}</div></li>,
                <li key={"8"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-2)} ><div className={pgStyle.paginationlUlLiDiv}>{">"}</div></li>];
            }
            else{
                buttons =  [<li key={"0"} className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-1)}><div className={pgStyle.paginationlUlLiDiv}  >{"<"}</div></li>,
                <li key={"1"}  className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(1)} ><div className={pgStyle.paginationlUlLiDiv}>1</div></li>,
                <li key={"2"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(0)} ><div className={pgStyle.paginationlUlLiDiv}>...</div></li>,
                <li key={"3"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(parseInt(this.props.currentPage)  - 2)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.currentPage - 2}</div></li>,
                <li key={"4"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(parseInt(this.props.currentPage)  - 1)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.currentPage - 1}</div></li>,
                <li key={"5"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(parseInt(this.props.currentPage))} ><div className={pgStyle.paginationlUlLiDiv + " " +pgStyle.active}>{this.props.currentPage}</div></li>,
                <li key={"6"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(parseInt(this.props.currentPage)  + 1)} ><div className={pgStyle.paginationlUlLiDiv}>{parseInt(this.props.currentPage)  + 1}</div></li>,
                <li key={"7"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(parseInt(this.props.currentPage)  + 2)} ><div className={pgStyle.paginationlUlLiDiv}>{parseInt(this.props.currentPage)  + 2}</div></li>,
                <li key={"8"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(0)} ><div className={pgStyle.paginationlUlLiDiv}>...</div></li>,
                <li key={"9"} className={pgStyle.paginationUlLi} onClick={()=>this.props.pageClick(this.props.totalPages)} ><div className={pgStyle.paginationlUlLiDiv}>{this.props.totalPages}</div></li>,
                <li key={"10"}className={pgStyle.paginationUlLi} onClick={()=>this.pageClick(-2)} ><div className={pgStyle.paginationlUlLiDiv}>{">"}</div></li>];
            }
        }

    return buttons;
    }

    pageClick(requestedPage){
        //console.log("------------------------ pageClick() in pagination",requestedPage);
        let requestingPage;
        if(requestedPage == -1){
            if(this.props.currentPage == 1){
                requestingPage = this.props.currentPage;
            }
            else{
                requestingPage = this.props.currentPage - 1;
            }
        }
        else if(requestedPage == -2){
            requestingPage = this.props.currentPage + 1;
        }
        else{
            requestingPage = requestedPage;
        }
        let pageManager = ()=>this.props.pageClick(requestingPage);
        pageManager();
    }

    render()
    {   
        return [
            <ul className={pgStyle.paginationUl}>
                {this.arrangeButtons(1,2)}
            </ul>
        ];
    }
}
export default Pagination;
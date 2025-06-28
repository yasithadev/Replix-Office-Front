import React from 'react';
import RSelectStyles from './rselect.module.css';
class RSelect extends React.Component{
    
    constructor(props) {
        super(props);
        this.selectedIndex = -1;
        this.selectedLable = "---select---";
        this.state = {dropDownHideShow: RSelectStyles.selectHide};
        this.selectedOnClick = this.selectedOnClick.bind(this);
        this.selectingOption = this.selectingOption.bind(this);
        this.wrapperRef = React.createRef();
        //this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    selectedOnClick(){
        //console.log("selectedOnClick-----------------");
        if(this.state.dropDownHideShow == ""){
            this.setState({dropDownHideShow: RSelectStyles.selectHide});
        }
        else{
            this.setState({dropDownHideShow: ""});
        }
        
    }
    selectingOption(index,value,lable){
        //console.log("value--------------------",value);
        this.selectedIndex = index;
        this.selectedLable = lable;
        this.setState({selectedLable:lable,dropDownHideShow: RSelectStyles.selectHide});
        let changePageLength = ()=>this.props.onSelect(index,value,lable);
        changePageLength();
    }
    generateOptionList(){
        let optionList=[];
        for(let i=0; i<this.props.children.length;i++){
            if(i == this.selectedIndex){
                optionList.push(<div key={i} className={RSelectStyles.sameAsSelected} onClick={()=>this.selectingOption(i,this.props.children[i].props["value"],this.props.children[i].props.children)}>{this.props.children[i].props.children}</div>);
            }
            else if( this.selectedIndex == -1 && this.props.children[i].props["selected"]){
                this.selectedIndex = i;
                this.selectedLable = this.props.children[i].props.children;
                optionList.push(<div key={i} className={RSelectStyles.sameAsSelected} onClick={()=>this.selectingOption(i,this.props.children[i].props["value"],this.props.children[i].props.children)}>{this.props.children[i].props.children}</div>);
                
            }
            else{
                optionList.push(<div key={i} onClick={()=>this.selectingOption(i,this.props.children[i].props["value"],this.props.children[i].props.children)}>{this.props.children[i].props.children}</div>);
            }
            
        }
        /*
        optionList = [<div key={"0"} onClick={()=>this.selectingOption(0,10,10)}>10</div>,
        <div key={"1"} onClick={()=>this.selectingOption(1,25,25)}>25</div>,
        <div key={"2"} onClick={()=>this.selectingOption(2,50,50)}>50</div>,
        <div key={"3"} onClick={()=>this.selectingOption(3,100,100)}>100</div>];
        */
        return optionList;
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({dropDownHideShow: RSelectStyles.selectHide});
        }
    }
    render()
    { 
       //console.log("this.props---------------",this.props) ;
        return <div ref={this.wrapperRef} className={RSelectStyles.customSelect} style={{width:"200px"}}><div className={RSelectStyles.selectSelected} onClick={this.selectedOnClick} >{this.selectedLable}</div>
        <div className={RSelectStyles.selectItems + " " + this.state.dropDownHideShow}>
            {this.generateOptionList()}
        </div></div>;
    }
}
class ROption extends React.Component{}
export { RSelect, ROption }
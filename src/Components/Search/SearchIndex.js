import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(){
    super();
    
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchValue: "",
      resultList:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchFunction = this.searchFunction.bind(this);
  }


  handleChange(event)
  {
    if(event.target.value == undefined)
    {
      this.setState({searchValue: "no value"})
    }
    else{

      this.setState({searchValue: event.target.value})
    }
  }
  
  searchFunction() {
    this.state.resultList = [];
    let searchItems = this.state.things;



    searchItems.map((item) => {
      if(item.includes(this.state.searchValue))
      {
        return this.state.resultList.push(item)
      }
    })
   }
  
  
  render(){
    return(
      <div>
       <Input type= "text" onChange={this.handleChange} value = {this.state.searchValue} placeholder='Search Here' />
       <button onClick={() => this.searchFunction()}>Search</button>
      
      {this.state.resultList.map((item, index) => {return (<li key={index}>{item}</li>)})}
     </div>
     )
    }
    
  }
 
export default SearchIndex;

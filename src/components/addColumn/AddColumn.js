import React ,{Component} from 'react'
import axios from "axios";

import './AddColumn.css'

class AddColumn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    addColumnHandler(){
      let  columnObj={
            name:this.state.columnName
        }
        axios.post(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${this.props.boardId}/columns.json`,columnObj)
        .then(()=>{
           
            this.props.hideModal();
        })
       
    }
    render() { 
        return (
            <div className="modalContainer">
                <div className="modalInnerContainer">
                <div className="heading">Add Column</div><br/>
                <div className='inputDiv'>
                   <label>Enter a column name </label>
                   <input id="column_name" type="text" onChange={(e)=>{this.setState({
                       columnName:e.target.value
                   })}}></input>
                </div>
                <button id="CreateColumn" onClick={()=>this.addColumnHandler()}>Add Column </button>
                </div>
                 
 
            </div>
          );
    }
}

export default AddColumn;
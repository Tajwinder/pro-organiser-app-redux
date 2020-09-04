import React,{Component} from 'react';
import Axios from 'axios';
import './AddCardModel.css'
class AddCardModel extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            boardMembers:[],
            cardTitle:'',
            cardMembers:[],
            cardDesc:'',
            cardDueDate:''


        }
    }

     getSelectedOption(sel) {
        let selectedOpt=[];
        let opt;
        for ( let i = 0, len = sel.options.length; i < len; i++ ) {
            opt = sel.options[i];
            if ( opt.selected === true ) {
                selectedOpt.push(opt)
            }
        }
        return selectedOpt;
    }
    
    
     getInitials(member){
        
        let newName=member.split(" ").map((n)=>n[0].toUpperCase()).join("")+"-"+member;
        return newName;
     }
     selMembersHandler=()=>{
        let sel=document.getElementById("selMembers")
        let opt = this.getSelectedOption(sel);
        let members=[]
        for(let i=0;i<opt.length;i++){
            let member=opt[i];
           let memberName=this.getInitials(member.value)
            members.push(memberName);
        }
       
       
       
      
    
    this.setState({
        cardMembers:[...members]
    })
   
    }

     addCardHandler=()=>{
    
        const cardObj={
            title:this.state.cardTitle,
            members:this.state.cardMembers,
            desc:this.state.cardDesc,
            dueDate:this.state.cardDueDate
         }
        //  console.log(cardObj);
       Axios.post(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${this.props.boardId}/columns/${this.props.columnId}/cards.json`,cardObj)
       .then(()=>{
          
           this.props.hideModel();
       })
    }

    componentDidMount(){
        Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${this.props.boardId}.json`)
        .then(response=>{
// console.log(response.data)
         let members=response.data['members']
         this.setState({boardMembers:[...members]})
        //  setBoardMembers([...members])
        })
    }
    render() { 
        return ( 
            <div className='modalContainer'>
                <div className="modalInnerContainer">
                <div className="heading">Add Card</div><br/>
 
                <label>Enter a title for your task</label><br/>
                <input id='title'  placeholder='e.g. Add a new icon' onChange={(e)=>this.setState({cardTitle:e.target.value})}></input><br/><br/>
                <label>Choose members for this task(select multiple, if needed)</label><br/>
                {/* <input id='team' placeholder='Add your team(separated by commas)'onChange={(e)=>this.setState({members:e.target.value.split(',')})} ></input><br/><br/> */}
                <select style={{marginTop:5}} name="members" id="selMembers" multiple onChange={()=>this.selMembersHandler()}>
                   {
                       this.state.boardMembers.map(
                        (obj)=>(
                            <option value={obj}>{obj}</option>
                       )

                    

                    )
                   } 
                   
                   
                </select><br/><br/>
                <label>Add the description for your task</label><br/>
                <input id='description' placeholder='Add your description here' onChange={(e)=>this.setState({cardDesc:e.target.value})}></input><br/><br/>
                <label>Select the due date for this task</label><br/>
                <input id='due_date' placeholder='e.g. Design Board' type='date' onChange={(e)=>this.setState({cardDueDate: e.target.value})}></input><br/><br/>

                <button  id='CreateCard' onClick={()=>this.addCardHandler()}>Add card</button>
            </div>
            </div>

         );
    }
}
 
export default AddCardModel;


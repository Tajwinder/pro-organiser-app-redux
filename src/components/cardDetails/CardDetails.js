import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {connect} from 'react-redux'
import {editCardModal} from './../../actions/rootActions'
import styles from './CardDetails.module.css';

import EditCard from './../editCard/EditCard'

const CardDetails=(props)=>{
  
    const [cardDetails,setCardDetails]=useState({})
    // const [editCard,showEditCard]=useState(false);

    const editCardHandler=()=>{
     props.showModal();
    }

    // const hideEditCardHandler=()=>{
    //    showEditCard(false);
    // }
  useEffect(() => {
   
    if(props.cardId){
      console.log("cardId");
      console.log(props.cardId);
      Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns/${props.columnId}/cards/${props.cardId}.json`)
      .then(response=>{
        if(response.data){
          
         
         
          setCardDetails(response.data  )
  
      }
         
      })
     
    }
    else{
      console.log(" no cardId");
     
    }
   
      return () => {
          
      }
  }, [props.boardId, props.cardId, props.columnId]) 
  
  return !props.modalState?null:(
    props.editCard?<EditCard boardId={props.boardId} columnId={props.columnId} cardId={props.cardId} hideModal={props.showModal}/>:(
    <div className={styles.AddStockForm}>
      <div className={styles.ModalContent}>
        <div>
        <div className={styles.cardHeader}>
        <div id={styles.title}>{cardDetails.title}</div>
        <div id={styles.subTitle}>in {props.columnName}</div>
        </div>
        <button className={styles.btn} id={styles.archiveBtn}>Archive</button>
        <button className={styles.btn} id={styles.editBtn} onClick={()=>editCardHandler()}>Edit</button>
       
        <hr style={{clear:"both"}}/>
        <div className={styles.heading}>Description</div>
        <div id={styles.description}>{cardDetails.desc}</div>
        <div className={styles.heading}>Members</div>
        <ul>
        {
          (cardDetails.members)?(
          cardDetails['members'].map(
            (obj)=>(
              <li className={styles.cardMember}>{obj.substring(0,2)}</li>
            )
          )
          ):null
        }
        </ul>
       
        <div className={styles.heading}>Due Date</div>
        <div>{cardDetails.dueDate}</div>
       
      <button onClick={()=>props.hideModal()}>cancel</button>
      </div>
      </div>
    </div> 
      
    )
  )
}
const mapDispatchToProps = dispatch => ({
  showModal: (obj) => dispatch(editCardModal(obj)),
  
  
})

 
const mapStateToProps = state => ({
  editCard:state.editCard
  
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails)
// export default CardDetails;
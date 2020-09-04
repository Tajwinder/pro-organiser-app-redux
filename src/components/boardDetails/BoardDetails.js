import React,{useState,useEffect } from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import {addColumnModal} from './../../actions/rootActions'
import AddColumn from '../addColumn/AddColumn';

import styles from './BoardDetails.module.css'

import Columns from './../columns/Columns'
const BoardDetails=(props)=>{
    // const hideColumnHandler=()=>{
    //     showAddColumn(false);
    // }
    
    // const [addColumn,showAddColumn]=useState(false);
    const [boardName,setBoardName]=useState('')
    
    const deleteBoardHandler=()=>{
        Axios.delete(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/.json`)
        .then(()=>{
          
            props.hideDetails();
        })
       
    }
   

    
       
        useEffect(()=>{
            console.log("board details updated")
             Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/.json`)
             .then(Response=>{
                
                 setBoardName(Response.data['name']);
               
               
             })
        
        return ()=>{

        }
    },[props.boardId])
        
        
        

        
        
         return (
         <>
         {
        props.addColumn? (
            <>
        <AddColumn boardId={props.boardId} hideModal={props.showModal} />
        <div className={styles.boardDetails}>
        <div className="heading" >{boardName}</div> 
           
        <Columns/>
        <button id={styles.addColumn} onClick={()=>props.showModal()}>Add a column</button>
        </div>
        </>
        )
        :(
         <div className={styles.boardDetails}>
         <div className={styles.boardName}>{boardName}</div> 
         <button className={styles.deleteBtn} onClick={()=>deleteBoardHandler()}>Delete Board</button>   
         <Columns/>
         <button id={styles.addColumn} onClick={()=>props.showModal()}>Add a column</button>
         </div>
        )
}
         </>
         )
    
}

const mapDispatchToProps = dispatch => ({

    // initBoards: (obj) => dispatch(initBoards(obj)),
    showModal: (obj)=> dispatch(addColumnModal(obj))
  })
  
  
  const mapStateToProps = state => ({
    // modalState:state.modalState,
  addColumn:state.addColumn,
  boardId:state.boardId
   
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(BoardDetails)

 

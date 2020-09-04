/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import styles from './EditCard.module.css'
const EditCard =(props)=>{
    const [cardDetails,setCardDetails]=useState({})
    const [cardTitle,setCardTitle]=useState('');
    const [cardDesc,setCardDesc]=useState('');
    const [cardDueDate,setDueDate]=useState('');
    
   const editCardHandler=()=>{
       
      const cardObj={
          title:cardTitle,
          desc:cardDesc,
          members:cardDetails.members,
          dueDate:cardDueDate

      }
      Axios.delete(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns/${props.columnId}/cards/${props.cardId}.json`)
      .then(()=>{
          Axios.post(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns/${props.columnId}/cards/.json`,cardObj)
          .then(()=>{
              alert("card edited successfully")
              props.hideModal();
          })
      })
    }

    useEffect(() => {
        Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns/${props.columnId}/cards/${props.cardId}.json`)
        .then(Response=>{
         setCardDetails(Response.data)
        })
        return () => {
            
        }
    }, [])

    return(
      
       <div className={styles.AddStockForm}>
           <div className={styles.ModalContent}>
           <div className='form'>
                <h3 id='formHeading'>Edit Card </h3>
 
                <label>Title for your task</label><br/>
                <input id='title' defaultValue={cardDetails.title} placeholder='e.g. Agile Sprint Board' onChange={(e)=>setCardTitle(e.target.value)}></input><br/><br/>
                <label>Team members</label><br/>
                {/* <input id='team' placeholder='Add your team(separated by commas)'onChange={(e)=>this.setState({members:e.target.value.split(',')})} ></input><br/><br/> */}
                <select name="members" id="selMembers" multiple >
                   {
                       cardDetails.members?(
                       cardDetails.members.map(
                        (obj)=>(
                            <option value={obj}>{obj}</option>
                       )

                    

                    )
                       ):null
                   } 
                   
                   
                </select>
                <label>Description for your task</label><br/>
                <input id='type' defaultValue={cardDetails.desc} placeholder='e.g. Design Board' onChange={e=>setCardDesc(e.target.value)} ></input><br/><br/>
                <label>Due date for your task</label><br/>
                <input id='type' defaultValue={cardDetails.dueDate} placeholder='e.g. Design Board' type='date' onChange={e=>setDueDate(e.target.value)}></input><br/><br/>
                <button onClick={()=>editCardHandler()} >save changes</button>
                <button onClick={()=>props.hideModal()}>cancel</button>
            </div>
        

               
           </div>
       </div>
    )
}

export default EditCard;
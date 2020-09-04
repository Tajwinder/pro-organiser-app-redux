import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {showBoardDetails, setBoardId} from './../../actions/rootActions'
import styles from './Home.module.css'
import BoardDetails from '../boardDetails/BoardDetails';
 const Home =(props)=>  {
   
    const [boards,setBoards]=useState([])
    
  function boardDetailsHandler(key){
    props.setBoardId(
         {
             boardId:key
         }
     )
     props.showBoardDetails();
   } 
 
   useEffect(() => {
       console.log("board updated")
    let myarr=[];
    let value;
    axios.get("https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards.json")
        .then(response=>{
            
            if(response.data){
                const keys = Object.keys(response.data);
                // iterate over object
                keys.forEach((key, index) => {
                    value=response.data[key];
                    value['key']=key;
                   
                    myarr.push(value)
               
                });
                setBoards([...myarr])
                    
               
            }
        })
   
       return () => {
           
       }
   }, [props.boardDetails])
   
   
    
       
        return props.boardDetails?<BoardDetails  hideDetails={props.showBoardDetails} ></BoardDetails>:( 
            <div className={styles.boards}>
                <div className="heading">Boards</div>
                {
                    boards.length===0?<div>You haven't created any boards. Kindly click on the 'Create Board' button in the navigation bar to create a board.
                     </div>:(
                        <ul className={styles.boardsList}>
                        { boards.map(
                            (obj,key)=>(
                                // console.log(obj)
                                <li key={key} className={styles.board}
                                   onClick={()=>boardDetailsHandler(obj.key)}>{obj.name}
                                    </li>
                            )
                        )
                            }
                        </ul>
                    )
                }
               
               
            </div>
            
         );
    }
    
   
 
const mapDispatchToProps = dispatch => ({

    // initBoards: (obj) => dispatch(initBoards(obj)),
    showBoardDetails: (obj) => dispatch(showBoardDetails(obj)),
    setBoardId: (obj) =>dispatch(setBoardId(obj)),
  })
  
  
  const mapStateToProps = state => ({
    // modalState:state.modalState,
    boardDetails:state.boardDetails,
    boards:state.boards
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)


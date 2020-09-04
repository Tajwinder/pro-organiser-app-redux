/* eslint-disable default-case */
// This is the initial state
let initialState = {
    addColumn:false,
    addCard:false,
    cardDetails:false,
    editCard:false,
    boardDetails:false,
    boardId:"",
    modalDetails:{
        symbol:'A',
        name:null,
        key:null
    },
    boards:[],
    addModal:[],
    tickers:[],
    stocksCount:0
    

}

// This is your reducer

const rootReducer = (state = {...initialState}, action) => {
    switch(action.type){
       
        case "ADDCOLUMN_MODAL":
                state = {
                    ...state,
                    addColumn:!state.addColumn
                }
                break;
         case "ADDCARD_MODAL":
                state = {
                    ...state,
                    addCard:!state.addCard
                }
                break;
         case "CARDDETAILS_MODAL":
                state = {
                    ...state,
                    cardDetails:!state.cardDetails
                }
                break; 
         case "EDITCARD_MODAL":
                state = {
                    ...state,
                    editCard:!state.editCard
                }
                break; 
        case "BOARD_DETAILS":
                state = {
                    ...state,
                    boardDetails:!state.boardDetails
                }
                break; 
        

        case "SET_BOARDID":
            state = {
                ...state,
                boardId:action.payload.boardId
                    
                
            }
            break;       
    
        case "ADD_REQUEST":
            state = {
                ...state,
               addModal:[...state.addModal, action.payload.stock]
                  
               
            }
            break;
        case "ADD_TICKERS":
                state = {
                    ...state,
                   tickers:[...state.tickers, action.payload.tickers]
                      
                   
                }
                break;
        case "UPDATE_SYMNAME":
            state = {
                ...state,
                modalDetails:{
                    ...state.modalDetails,
                    symbol:action.payload.symbol,
                    name:action.payload.name,
                    key:action.payload.key
                }

            }
            break;
        case "INIT_STOCK":
                state = {
                    ...state,
                   addModal:[...action.payload.stock]
                      
                   
                }
                break;
             
        case "INIT_BOARDS":
                    state = {
                        ...state,
                       boards:[...action.payload.boards]
                          
                       
                    }
                    break;        
        case "INIT_TICKERS":
                    state = {
                        ...state,
                       tickers:[...action.payload.tickers]
                          
                       
                    }
                    break;
        case "INCREMENT_STOCKS_COUNT":
                    state = {
                        ...state,
                        stocksCount:state.stocksCount+1
                      
                          
                       
                    }
                    break;
        case "DECREMENT_STOCKS_COUNT":
                    state = {
                        ...state,
                        stocksCount:state.stocksCount-1
                      
                          
                       
                    }
                    break;
        case "INIT_STOCKS_COUNT":
                    state = {
                        ...state,
                      stocksCount:action.payload.count
                            
                        
                    }
                    break;
        case "OTHER_ACTION":
            break;

    }
    return state;
}

export default rootReducer;
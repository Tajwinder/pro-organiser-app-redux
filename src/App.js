import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import CreateBoardForm from './components/createBoardForm/CreateBoardForm';


export default function App(){

    return(
       
        
     <BrowserRouter>
         <div>
           <Navbar/> 

           <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/createboard'  component={CreateBoardForm}/>
           </Switch>
            
         </div>
     </BrowserRouter>

       
    )
}
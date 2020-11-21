import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import Footercomponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
  
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <switch>
                <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                <Route path = "/add-employee/:empId?" component = {CreateEmployeeComponent}></Route>
                <Route path = "/view-employee/:empId" component = {ViewEmployeeComponent}></Route>
                <Route path = "/update-employee/:empId" component = {UpdateEmployeeComponent}></Route>               
            </switch>           
          </div>
          <Footercomponent />
        </div>
      </Router>
     
    </div>
    
  )
}

export default App;

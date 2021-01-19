import React,{useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//add to home screen prompt

//imports of page contents
import CollegeAdminHomePage from './components/pages/CollegeAdminHomePage';
import CreateAdmin from './components/pages/CreateAdmin';
import CreateDepartments from './components/pages/CreateDepartments';
import CollegeAdminLogin from './components/pages/CollegeAdminLogin';

function App() {
  const [admins, setAdmins] = useState([]);
  const updateAdminsArray=eachEntry=>
  {
    setAdmins([...admins,eachEntry]);
  }
  return(
  <>
  <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact>
          <div className="center"><h1>Admin Dashboard</h1></div>
          <CollegeAdminHomePage admins={admins}/>
          </Route>
        <Route path='/CreateAdmin'>
          <CreateAdmin updateAdminsArray={updateAdminsArray}/>
          <div className="center"><h1>Values Entered</h1></div>
          <CollegeAdminHomePage admins={admins}/> 
        </Route>
        <Route path='/CreateDepartments' component={CreateDepartments} />
        <Route path='/CollegeAdminLogin' component={CollegeAdminLogin} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

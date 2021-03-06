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
  

  //add entries to admins
  const updateAdminsArray=eachEntry=>
  {
    setAdmins([...admins,eachEntry]);
  }

  const deleteAdmins=(index)=>{
        admins.splice(index,1);//splice 
        setAdmins([...admins]);//update state
  }

  //update data in admins
  const updateAdmins=(index,name,username,email,phone,password)=>{
      admins[index]={Name:name,UserName:username,Email:email,Phone:phone,Password:password};
      setAdmins([...admins]);
  }


  return(
  <>
  <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact>
          <div className="center"><h1>Admin Dashboard</h1></div>
           <CollegeAdminHomePage admins={admins} deleteAdmins={deleteAdmins} updateAdmins={updateAdmins}/>
          </Route>
        <Route path='/CreateAdmin'>
          <CreateAdmin updateAdminsArray={updateAdminsArray}/>
          <div className="center"><h1>Values Entered</h1></div>
              <CollegeAdminHomePage admins={admins} deleteAdmins={deleteAdmins} updateAdmins={updateAdmins}/> 
        </Route>
        <Route path='/CreateDepartments' component={CreateDepartments} />
        <Route path='/CollegeAdminLogin' component={CollegeAdminLogin} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CreateDepartments extends Component {
    //state = {  }
    render() { 
        return (
           <React.Fragment>
               <div id="RegisterFields">
                    <TextField id="standard-basic" label="Department Name"/>
                    <TextField id="standard-basic" label="Department Name"/>
                    
                    <TextField id="standard-basic" label="Dropdown to be added here showing admins already created"/>
               </div>

               <div id="RegisterButtons">
                    <Button variant="contained" color="primary">Submit</Button>
                    <Button variant="contained" color="secondary">Reset</Button> 
               </div>
           </React.Fragment>
        );
    }
}
 
export default CreateDepartments;
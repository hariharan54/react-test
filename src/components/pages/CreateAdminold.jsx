import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CreateAdmin extends Component {
    state = {  }

    Submit()
    {
        alert("Submit pressed");
    }
    Reset()
    {
        alert("Reset pressed");
    }
    render() { 
        return (  
            <React.Fragment>
                <div><h1 align="center">Create New Admin</h1></div>
                <div id="RegisterFields">
                    <TextField label="Name"/>
                    <TextField label="UserName"/>
                    <TextField label="Email"/>
                    <TextField label="Phone"/>
                    <TextField id="password" type="password" label="Password"/>
                    <TextField id="ConfirmPassword" type="password" label="Confirm Password"/>
               </div>

               <div id="RegisterButtons">
                    <Button variant="contained" color="primary" onClick={this.Submit}>Submit</Button>
                    <Button variant="contained" color="secondary" onClick={this.Reset}>Reset</Button> 
               </div>
            </React.Fragment>
        );
    
    
    }
}
 
export default CreateAdmin;
import React,{useState} from 'react'
import './CreateAdmin.css'
import {FormGroup,TextField,Button} from '@material-ui/core'
//import {Row,Col,Table}from 'reactstrap'; 

const CreateAdmin = (props) => {
    //destructuring props
    const{updateAdminsArray}=props;
    
    const inititalInputState={Name:"",UserName:"",Email:"",Phone:"",Password:""};
    // eachEntry state  setEAchENtry function changing state  initital input state req for forms only
    const [eachEntry,setEachEntry]=useState(inititalInputState);
    // dereferencing eachEntry to make life easier while setting state
    const{Name,UserName,Email,Phone,Password}=eachEntry;

    //handling the change in i/p
    const handleInputChange=e=>{
        setEachEntry({...eachEntry,[e.target.name]:e.target.value});
    }

    const SubmitPressed = e=>{
        updateAdminsArray(eachEntry);
    }
    return (
        <div className="md-4">
            
            <form>
                <FormGroup>
                    
                    {/* <label for="Name">Name:</label> */}
                    <TextField id="outlined-basic" label="Name" variant="outlined" name="Name" value={Name} onChange={handleInputChange}/>
                    
                    <TextField id="outlined-basic" label="Username" variant="outlined" name="UserName" value={UserName} onChange={handleInputChange}/>
                    
                    <TextField id="outlined-basic" label="Email address" variant="outlined" name="Email"value={Email} onChange={handleInputChange}/>
                    
                    <TextField id="outlined-basic" label="Phone number" variant="outlined" name="Phone"value={Phone} onChange={handleInputChange}/>
                    
                    <TextField id="outlined-basic" label="Password" variant="outlined"  type="password" name="Password"value={Password} onChange={handleInputChange}/>
                    
                    <TextField id="outlined-basic" label="Confirm password" variant="outlined" type="password" name="ConfirmPassword"/>

                </FormGroup>

                <div className="center"><Button className="center" variant="contained" color="primary" onClick={SubmitPressed}>Submit</Button>
                </div>{/* <Button variant="contained" color="secondary" onClick={Reset}>Reset</Button>  */}
            </form>
        </div>
    )
}

export default CreateAdmin




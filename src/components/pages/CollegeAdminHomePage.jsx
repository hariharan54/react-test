import React,{useState}from 'react';
import {Row,Col,Table,Modal,ModalHeader, ModalBody, ModalFooter}from 'reactstrap';
import EditIcon from '@material-ui/icons/EditOutlined';
import  TrashIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {TextField,Button} from '@material-ui/core'

const CollegeAdminHomePage = (props) => {
    const {admins,deleteAdmins,updateAdmins}=props;
    //console.log(admins);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    const[rowid,setRowid]=useState(-1);
    const deleterow=(props)=>{
        deleteAdmins(props);
    }
    try
    {
        var {Name,UserName,Email,Phone,Password}=admins[rowid];
    }catch(e){console.log(e)}
    
    const handleInputChange=(e)=>{
            var x=e.target.value;
        if(e.target.name==="Name"){Name=x;}
        if(e.target.name==="UserName"){UserName=x;}
        if(e.target.name==="Email"){Email=x;}
        if(e.target.name==="Phone"){Phone=x;}
        if(e.target.name==="password"){Password=x;}}

    const EditRow=(i)=>{
        //var {Name,UserName,Email,Phone,Password}=admins[i];
        // modal start
        setModal(toggle);
        setRowid(i);
         //modal ends
        //Name=prompt("Enter name:",Name);
        //Email=prompt("Enter Email:",Email);
        //Phone=prompt("Enter Phone:",Phone);
        //updateAdmins(i,Name,UserName,Email,Phone,Password);
}

//inner table function
const RenderTableData=props=>{
    const {admins}=props;
    var count=0;
    return Object.keys(admins).map((i,o)=>{
        const {Name,UserName,Email,Phone,Password}=admins[i];
        count++;
        return(
            <>
            <tr key={count.toString(10)}>
                <th>{count.toString(10)}</th>
                <td>{Name}</td>
                <td>{UserName}</td>
                <td>{Email}</td>
                <td>{Phone}</td>
              <td> <EditIcon onClick={()=>EditRow(i)}/></td>
               <td><TrashIcon onClick={(e)=>deleterow(i)}/></td>
                {/* <td>{Password}</td> */}
            </tr>

            
            </>
        )   
    })
    
    }
    // console.log(props);
    //modal submit button code
    const updatevaluesandclose=(rowid,Name,UserName,Email,Phone,Password)=>{
    //pushing to app js to update
    updateAdmins(rowid,Name,UserName,Email,Phone,Password);
    //close modal
    setModal(toggle);
}

    
    return(
        
        <div className="mt-6" >
            <Modal isOpen={modal} toggle={toggle} className="Modal">
        <ModalHeader toggle={toggle}>Update Details</ModalHeader>
        <ModalBody>
            <div><TextField className="outlined-basic" label="Name" variant="outlined" name="Name" defaultValue={Name} onChange={handleInputChange}/></div>
                    
                   <div><TextField className="outlined-basic" label="Username" variant="outlined" name="UserName" defaultValue={UserName} onChange={handleInputChange}/></div>
                    
                  <div><TextField className="outlined-basic" label="Email address" variant="outlined" name="Email"defaultValue={Email} onChange={handleInputChange}/></div>
                    
                  <div><TextField className="outlined-basic" label="Phone number" variant="outlined" name="Phone"defaultValue={Phone} onChange={handleInputChange}/></div>
                    
                  <div><TextField className="outlined-basic" label="Password" variant="outlined"  type="password" name="Password"defaultValue={Password} onChange={handleInputChange}/></div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>updatevaluesandclose(rowid,Name,UserName,Email,Phone,Password)}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
            
            
            <Row>
                <Col sm="12" md={{size: 6,offset:3}}>
                    <Table hostriped bordered hover variant="dark">
                        <thead>
                            <th>#ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email ID</th>
                            <th>Phone</th>
                            {/* <th>Password</th> */}

                        </thead>
                        <tbody>
                              <RenderTableData admins={admins}/>
                             {/* <RenderTableData currentadmins={currentadmins}/> */}
                        </tbody>
                    </Table>
                </Col>
            </Row>
          

        </div>
    )



}

export default CollegeAdminHomePage;



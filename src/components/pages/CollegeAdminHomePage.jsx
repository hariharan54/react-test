import React from 'react';
import {Row,Col,Table}from 'reactstrap';
import EditIcon from '@material-ui/icons/EditOutlined';
import  TrashIcon from '@material-ui/icons/DeleteOutlineOutlined';


const CollegeAdminHomePage = (props) => {
    const {admins,deleteAdmins,updateAdmins}=props;
    //console.log(admins);
    
    const deleterow=(props)=>{
    deleteAdmins(props);
}

const EditRow=(i)=>{
    
    var {Name,UserName,Email,Phone,Password}=admins[i];
    Name=prompt("Enter name:",Name);
    Email=prompt("Enter Email:",Email);
    Phone=prompt("Enter Phone:",Phone);
    updateAdmins(i,Name,UserName,Email,Phone,Password);
}

//inner table function
const RenderTableData=props=>{
    const {admins}=props;
    var count=0;
    return Object.keys(admins).map((i,o)=>{
        const {Name,UserName,Email,Phone,Password}=admins[i];
        count++;
        return(
        
        
            <tr key={count.toString(10)}>
                <th>{count.toString(10)}</th>
                <td>{Name}</td>
                <td>{UserName}</td>
                <td>{Email}</td>
                <td>{Phone}</td>
              <td> <EditIcon onClick={()=>EditRow(i)}/></td>
               <td><TrashIcon onClick={()=>deleterow(i)}/></td>
                {/* <td>{Password}</td> */}
            </tr>
    
        )   
    })
    
}

    // console.log(props);
    return(
        <div className="mt-6" >
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




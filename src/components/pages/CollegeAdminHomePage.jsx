import React from 'react';
import {Row,Col,Table}from 'reactstrap';

const CollegeAdminHomePage = (props) => {
    const {admins}=props;
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
                        </tbody>
                    </Table>
                </Col>
            </Row>


        </div>
    )

}

export default CollegeAdminHomePage;

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
                {/* <td>{Password}</td> */}
            </tr>
    
        )   
    })
    
}
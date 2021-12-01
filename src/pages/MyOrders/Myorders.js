// This is use for import
import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import MyOrder from './MyOrder';


const Myorders = () => {
   // This is use for updating data
   const [manageOrder, setManageOrder] = useState([]);
   useEffect( () => {
       // This useEffect Use for taking data from fake DB
       fetch('https://thawing-woodland-70803.herokuapp.com/manageAllOrder')
       .then(res => res.json())
       .then(data => {
          setManageOrder(data)
       })
   },[])
  return (
      <div>
      <div className="p-5 mt-5">
     
     <Container>
         {/* THIs section will send the data to the Destination Page*/}
        
        <h3 className="text-center fw-bold display-5 mb-5 pt-2">My <span className="text-danger">Order List</span></h3>
        <Row xs={1} md={3} className="g-4">

        

          {
              manageOrder.map(item=> <MyOrder
              item={item}
              key={item._id}
              ></MyOrder>)
          }


      </Row>
     </Container>
  </div>
  </div>
  );
};

export default Myorders;
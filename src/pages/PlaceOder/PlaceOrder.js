// This is use for Detail page.This page will be access if user already login

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Col, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const {user} = useAuth();
    const {serviceId} = useParams();
    const [detail, setDetail] = useState({});
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://thawing-woodland-70803.herokuapp.com/manageAllOrder', data)
        .then(res=>{
           if(res.data.insertedId){
               alert("Successfully Added data in the Mongodb Server");
               reset()
           }
        })
    
    };
    
    useEffect( ()=>{
        const url = `https://thawing-woodland-70803.herokuapp.com/offering/${serviceId}`;
        
        fetch(url)
        .then(res => res.json())
        .then(data => {
            
            setDetail(data)
        
        })
        
        
    }, [] )

    const {name, _id, img} = detail;
    
  
    return (
<div className="py-5 my-5">
            <Container>
            <h3 className="text-center text-secondary mt-5 mb-3">Order Placement Page . Confirm Your Order By follow red color text</h3>
            <h5 className="text-center text-danger mt-5 mb-5">Please copy Offering Name, Offering Id, Offering Image URL perfectly to ensure you are aware of your order placement  </h5>

            <div className="add-service d-flex">
            <Col md={7} className="gap-0">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} value={user?.displayName}/>
            <input {...register("email")} value={user?.email} />
            <input {...register("productName")} placeholder="Please Copy the Offering Name and Past Here" />
            <input {...register("_id")} placeholder="Please Copy the Offering Id and Past Here" />
            <input {...register("img")} placeholder="Please Copy the offering Image URL Past Here" />
            
            <input type="submit" />          
            </form>
            </Col>
            <Col md={4}>
                <h5>Offering Name: {name}</h5>
                <br/>
                <h5>Offering Id: {_id}</h5>
                <br/>
                <h5>Offering img URL:</h5>
                <h5>{img}</h5>
            </Col>
            </div>
            </Container>
        </div>
    );

};

export default PlaceOrder;
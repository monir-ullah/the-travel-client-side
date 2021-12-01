import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://thawing-woodland-70803.herokuapp.com/offering', data)
        .then(res=>{
           if(res.data.insertedId){
               alert("Successfully Added data in the Mongodb Server");
               reset()
           }
        })
    
    };
    return (
        <div className="py-5 my-5">
            <Container>
            <h3 className="text-center text-secondary mt-5 mb-3">Please Add a New tour Destination</h3>

            <div className="add-service">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name(Please Ensure maxLength 30 Char)"/>
            <input type="number" {...register("price")} placeholder="Price" />
            <textarea {...register("description", { required: true, maxLength: 330 }) } placeholder="Please Add proper Description(Please Ensure maxLength 330 Char)"  /> 
            <input {...register("img")} placeholder="Image URL"  />
            <input type="submit" />
           
            </form>
            </div>
            </Container>
        </div>
    );
};

export default AddService;
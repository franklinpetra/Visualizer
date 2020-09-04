import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const Registration = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    
    const submitData = () => {
        axios.post("http://localhost:8000/api/algos/new", user)
            .then(response => {
                if(response.data.message === "Success!"){
                    setUser({
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: ""
                    })
                    navigate("/algos/all");
                }
                else {
                    console.log(response.data.results);
                    const {...currErrors} = errors
                    if(response.data.results.errors.firstName){
                        currErrors.firstName = response.data.results.errors.firstName.properties.message
                    } else {
                        currErrors.firstName = "";
                    }
                    if(response.data.results.errors.lastName){
                        currErrors.lastName = response.data.results.errors.lastName.properties.message
                    } else {
                        currErrors.lastName = "";
                    }
                    if(response.data.results.errors.email){
                        currErrors.email = response.data.results.errors.email.properties.message
                    } else {
                        currErrors.email = "";
                    }
                    if(response.data.results.errors.password){
                        currErrors.password = response.data.results.errors.password.properties.message
                    } else {
                        currErrors.password = "";
                    }

                    setErrors(currErrors);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    return (
        
        <div style={{textAlign:"center",  width:"85%", padding:"0px 0px 0px 0px", margin:"0% 2% 0% 2%"}}>
            <div className="container" style={{textAlign:"center", width:"100%", padding:"0px 0px 0px 0px", backgroundColor:"#8b572a", color:"white", borderBottom:"2px solid black", margin:"0% 0% 0% 0%"}}>
                <h1></h1>
            </div>
            <div className="container" style={{backgroundColor:"white", width:"100%", padding:"0px 0px 0px 0px", margin:"0% 0% 0% 0%"}}>         
                <Form data={ user } changeHandler={ changeHandler } errors={ errors } setData={ setUser } submitData={ submitData }/>
            </div>
        </div>
    )
}

export default Registration

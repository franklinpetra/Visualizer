import React, { useState, useEffect } from 'react';
import FormAlgo from './FormAlgo';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const New = () => {
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
        axios.post("http://localhost:8000/api/users", user)
            .then(response => {
                if(response.data.message === "Success!"){
                    setUser({
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: ""
                    })
                    navigate("/");
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
        <div>
            <div>
                <div style={{ margin:"2% 0% 1% 0%"}}>
                    <div style={{margin:"2% 0% 0% 0%", backgroundColor:"brown", color:"white"}}><br></br>
                        <h1 style={{margin:"3% 0% 0% 0%", color: "white", backgroundColor:"brown", verticalAlign:"middle"}}>Add Another One</h1>
                        <Link to={ `/algos/` }><button className="col-sm-2 btn btn-success" style={{margin:"1% 0% 2% 75%"}}>Algorithm Collection</button></Link>
                        <FormAlgo data={ user } changeHandler={ changeHandler } errors={ errors } setData={ setUser } submitData={ submitData }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New

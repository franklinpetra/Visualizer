import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Form = props => {
    const { action, eReg } = props;
    const [newErrors, setNewErrors] = useState([])
    const [data, setData] = useState([])
    const [user, setUser] = useState([])
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "";
        }
    };

    useEffect(() => {
        if(action === "edit"){
            axios.get(`http://localhost:8000/api/algos/${props.id}/update`)
                .then(response => {
                    if(response.data.message === "Success!")
                        setNewUser(response.data.results)
                    else
                        navigate("/algos/all");
                })
        }
    },[])

    const submitHandler = e => {
        e.preventDefault();
        if(validate(newUser)){
            if(action === "edit"){
                axios.put(`http://localhost:8000/api/algos/${props.id}`, newUser)
                    .then(response => {
                        if(response.data.message === "Success!"){
                            navigate("/all");
                        }
                    })
                    .catch(err => console.log(err));
            } else {
                axios.post(`http://localhost:8000/api/algos/new`, newUser)
                    .then(response => {
                        if(response.data.message === "Success!"){
                            navigate("/all");
                        }
                    })
                    .catch(err => console.log(err));
            }
        }
    }

    const changeHandler = e => {
        const curUser = {
            ...newUser,
            [e.target.name]: e.target.value
        }

        validate(curUser);
        setNewUser(curUser);
        setHasBeenSubmitted( true );
    }

    const validate = user => {
        let valid = false;
        const {...curErrors} = errors;
        if(user.firstName.length === 0){
            curErrors.firstName = "We'll need a name. This is a required field.";
        } else if(user.firstName.length < 2) {
            curErrors.firstName = "First name must be at least 2 characters in length.";
        } else if(user.firstName.length > 50){
            curErrors.firstName = "Yikes. We are going to have trouble with a 50 character name. How about...we go for a nick name here.";
        } else {
            curErrors.firstName = "";
            valid = true;
        }

        if(user.lastName.length === 0){
            curErrors.lastName = "This is a required field.";
        } else if(user.lastName.length < 3) {
            curErrors.lastName = "Last names must have at least 3 characters.";
        } else {
            curErrors.lastName = "";
            valid = true;
        }

        if(user.email.length === 0){
            curErrors.email = "An email address is a required field.";
        } else {
            curErrors.email = "";
            valid = true;
        }

        if(user.password.length === 0){
            curErrors.password = "This is a required field.";
        } else {
            curErrors.password = "";
            valid = true;
        }

        if(user.confirmPassword.length === 0){
            curErrors.confirmPassword = "This is a required field.";
        } else if(user.confirmPassword != user.password) {
            curErrors.confirmPassword = "Typo perhaps? Your confirm password must match your password.";
        } else {
            curErrors.confirmPassword = "";
            valid = true;
        }
        setErrors(curErrors);

        return valid;
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/algos/${props.id}/delete`)
            .then(response => {
                if(response.data.message === "Success!"){
                    navigate("/all")
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {/* Registration Form */}
      
            <div className="container" style={{border:"3px solid black", backgroundColor:"beige", maxWidth:"40%", display:"inline-block", margin:"5% 50% 0% 1%"}}>
                <p>{ formMessage() }</p>
                <div className="col-md-6"style={{backgroundColor:"beige"}}> 
                    <h1 style={{margin:"10% 0% 10% 55%", backgroundColor:"beige"}}>Register</h1>
                </div>
                <form onSubmit={ submitHandler } style={{ backgroundColor:"beige"}}>
                    <div>
                        <div className="form-group col-xs-6">
                                {
                                    errors.firstName ? 
                                    <p className="col-sm-6 text-left text-nowrap text-danger">{ errors.firstName }</p>
                                    :
                                    ''
                                }
                            <label htmlFor="firstName" style={{margin:"0% 80% 0% 0%"}}>First Name: </label>
                            <input 
                                type="text" 
                                name="firstName" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newUser.firstName }
                            />
                        </div>

                        <div className="form-group col-xs-6">
                            {
                                errors.lastName ? 
                                <p className="col-sm-6  text-sm-left text-danger">{ errors.lastName }</p>
                                :
                                ''
                            }
                            <label htmlFor="lastName" style={{margin:"0% 80% 0% 0%"}}>Last Name: </label>
                            <input 
                                type="text" 
                                name="lastName" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newUser.lastName }
                            />
                        </div>

                        <div className="form-group col-xs-6">
                            {
                                errors.email ? 
                                <p className="col-sm-6 text-nowrap text-danger">{ errors.email }</p>
                                :
                                ''
                            }
                            <label htmlFor="email" style={{margin:"0% 90% 0% 0%"}}>Email: </label>
                            <input 
                                type="text" 
                                name="email" 
                                className="form-control "
                                onChange={ changeHandler }
                                value={ newUser.email }
                            />
                        </div>              
                    
                        <div className="form-group col-xs-6">
                            {
                                errors.password ? 
                                <p className="col-sm-6 text-left text-danger">{ errors.password }</p>
                                :
                                ''
                            }
                            <label htmlFor="password" style={{margin:"0% 90% 0% 0%"}}>Password: </label>
                            <input 
                                type="password" 
                                name="password" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newUser.password }
                            />
                        </div>
                
                        <div className="form-group col-xs-6">
                            {
                                errors.confirmPassword ? 
                                <p className="col-sm-8 text-left text-danger">{ errors.confirmPassword }</p>
                                :
                                ''
                            }
                            <label htmlFor="confirmPassword" style={{margin:"0% 65% 0% 0%"}}>Confirm Password: </label>
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newUser.confirmPassword }
                            />
                        </div>
            
                        <div className="form-group col-xs-6">
                            
                            <input type="submit" value="Register" className="col-md-6 btn btn-primary" style={{margin:"0% 0% 0% 0%"}}/>
                        </div><br></br>
                    </div>
                </form>
            </div>

                {/* Login Form */}
            <div className="container" style={{border:"3px solid black", backgroundColor:"white", maxWidth:"40%",  margin:"-500% 1% 50% 50%", display:"inline-block"}}>
                <p>{ formMessage() }</p>
                <form onSubmit={ submitHandler }>
                    <div className="col-md-6"> 
                        <h1 style={{margin:"10% 0% 10% 55%", backgroundColor:"white"}}>Login</h1>
                    </div>
                    <div className="form-group col-xs-6">
                            {
                                errors.email ? 
                                <p className="col-sm-6 text-left text-danger">{ errors.email }</p>
                                :
                                ''
                            }
                            <label htmlFor="email" style={{margin:"0% 90% 0% 0%"}}>Email: </label>
                            <input 
                                type="text" 
                                name="email" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newUser.email }
                            />
                    </div>
                    <div className="form-group col-xs-6">
                        {
                            errors.password ? 
                            <p className="col-sm-6 offset-sm-4 text-danger">{ errors.password }</p>
                            :
                            ''
                        }
                        <label htmlFor="password" style={{margin:"0% 90% 0% 0%"}}>Password: </label>
                        <input 
                            type="text" 
                            name="password" 
                            className="form-control"
                            onChange={ changeHandler }
                            value={ newUser.password }
                            />
                    </div>
                    <input type="submit" value="Login" className="col-sm-3 btn btn-primary" style={{margin:"0% 0% 5% 8%"}}/>
                </form>       
            </div>
        </div>
    )
}

export default Form;

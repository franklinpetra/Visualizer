import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const FormAlgo = props => {
    const { action, update } = props;
    const [newErrors, setNewErrors] = useState([]);
    const [data, setData] = useState([]);
    const [algo, setAlgo] = useState([]);
    const [user, setUser] = useState([]);
    const [newAlgo, setNewAlgo] = useState({
        name: "",
        image: "",
        desc: "",
        worst: "",
        best: "",
        aver: "",
        quote: "",
        code: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        image: "",
        desc: "",
        worst: "",
        best: "",
        aver: "",
        quote: "",
        code: ""
    })

    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for adding a new algo to the collection!";
        } else {
            return "";
        }
    };

    useEffect(() => {
        if(action === "update"){
            axios.put(`http://localhost:8000/api/algos/${props.id}/update`)
                .then(response => {
                    if(response.data.message === "Success!")
                        setNewAlgo(response.data.results)
                    else
                        navigate("/algos/");
                })
        }
    },[])

    const submitHandler = e => {
        e.preventDefault();
        if(validate(newAlgo)){
            if(action === "update"){
                axios.put(`http://localhost:8000/api/algos/${props.id}`, newAlgo/update)
                    .then(response => {
                        if(response.data.message === "Success!"){
                            navigate("/algos/");
                        }
                    })
                    .catch(err => console.log(err));
            } 
        }
    }

    const changeHandler = e => {
        const curAlgo = {
            ...newAlgo,
            [e.target.name]: e.target.value
        }
        validate(curAlgo);
        setNewAlgo(curAlgo);
        setHasBeenSubmitted( true );
    }

    const validate = user => {
        let valid = false;
        const {...curErrors} = errors;
        if(user.name.length === 0){
            curErrors.name = "The algorithm will need a name. This is a required field.";
        } else if(user.name.length < 2) {
            curErrors.name = "Algorithm name must be at least 2 characters in length.";
        } else {
            curErrors.name = "";
            valid = true;
        }

        if(user.image.length === 0){
            curErrors.image = "An image url is required.";
        } else {
            curErrors.image = "";
            valid = true;
        }

        if(user.desc.length === 0){
            curErrors.descs = "The description is a required field.";
        } else {
            curErrors.descs = "";
            valid = true;
        }

        if(user.worst.length === 0){
            curErrors.worst = "The worst speed of this algo is a required field.";
        } else {
            curErrors.worst = "";
            valid = true;
        }

        if(user.best.length === 0){
            curErrors.best = "The best speed of this algo is a required field.";
        } else {
            curErrors.best = "";
            valid = true;
        }
        if(user.aver.length === 0){
            curErrors.aver = "ThAverage speed is a required field.";
        } else {
            curErrors.aver = "";
            valid = true;
        }

        if(user.quote.length === 0){
            curErrors.quote = "Who created this algorithm? Why was it created?";
        } else {
            curErrors.quote = "";
            valid = true;
        }

        if(user.code.length === 0){
            curErrors.code = "This is a required field.";
        } else {
            curErrors.code = "";
            valid = true;
        }


        setErrors(curErrors);

        return valid;
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/algos/${user.id}/${props.id}`)
            .then(response => {
                if(response.data.message === "Success!"){
                    navigate("/users/display/all")
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {/* Create Algo Form */}
            <div className="container" style={{border:"2px solid black", maxWidth:"40%", display:"inline-block", margin:"5% 00% 0% 1%"}}> 
                <div className="container" style={{textAlign:"center", width:"100%", padding:"0px 0px 0px 0px", backgroundColor:"", color:"brown", margin:"0% 0% 0% 0%"}}>
                    <h1 style={{margin:"10% 0% 10% 0%"}}></h1>
                </div>
                <form onSubmit={ submitHandler } >
                    <div>
                        <div className="form-group col-xs-6">
                                {
                                    errors.name ? 
                                    <p className="col-sm-6 text-left text-nowrap text-danger">{ errors.name }</p>
                                    :
                                    ''
                                }
                            <label htmlFor="name" style={{margin:"0% 89% 0% 0%", color: "grey"}}>Name: </label>
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newAlgo.name }
                                placeholder="Algorithm Name"
                            />
                        </div>

                        <div className="form-group col-xs-6">
                            {
                                errors.image ? 
                                <p className="col-sm-6  text-sm-left text-danger">{ errors.lastName }</p>
                                :
                                ''
                            }
                            <label htmlFor="image" style={{margin:"0% 86% 0% 0%", color: "grey"}}>Image: </label>
                            <input 
                                type="text" 
                                name="image" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newAlgo.image }
                                placeholder="Link to url"
                            />
                        </div>

                        <div className="form-group col-xs-6">
                            {
                                errors.desc ? 
                                <p className="col-sm-6 text-nowrap text-danger">{ errors.desc }</p>
                                :
                                ''
                            }
                            <label htmlFor="desc" className="formGroupExampleInput" style={{margin:"0% 80% 0% 0%", color: "grey"}}>Description: </label>
                            <input 
                                type="text" 
                                name="desc" 
                                className="form-control "
                                onChange={ changeHandler }
                                value={ newAlgo.desc }
                               
                            />
                        </div>              
                    
                        <div className="form-group col-xs-6">
                            {
                                errors.worst ? 
                                <p className="col-sm-6 text-left text-danger">{ errors.worst }</p>
                                :
                                ''
                            }
                            <label htmlFor="worst" style={{margin:"0% 41% 0% 0%", color: "grey"}}>Worst Speed Based on O(n) Value: </label>
                            <input 
                                type="text" 
                                name="worst" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newAlgo.worst }
                                placeholder="O(n) value"
                            />
                        </div>
                
                        <div className="form-group col-xs-6">
                            {/* {
                                errors.best ? 
                                <p className="col-sm-8 text-left text-danger">{ errors.best }</p>
                                :
                                ''
                            } */}
                            <label className="form-check-label" htmlFor="best" style={{margin:"0% 42% 0% 0%", color: "grey"}}>Best Speed Based on O(n) Value: </label>
                            <input 
                                type="text" 
                                name="best" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newAlgo.best }
                                placeholder="O(n) value"
                            />
                        </div>
                        <div className="form-group col-xs-6">
                            {/* {
                                errors.aver ? 
                                <p className="col-sm-8 text-left text-danger">{ errors.aver }</p>
                                :
                                ''
                            }  */}
                            <label className="form-check-label" htmlFor="aver" style={{margin:"0% 39% 0% 0%", color: "grey"}}>Average Speed Based on O(n) Value: </label>
                            <input 
                                type="text" 
                                name="aver" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newAlgo.aver }
                                placeholder="O(n) value"
                            />
                        </div>
                        <div className="form-group col-xs-6">
                            {/* {
                                errors.quote ? 
                                <p className="col-sm-8 text-left text-danger">{ errors.quote }</p>
                                :
                                ''
                            } */}
                            <label className="form-check-label" htmlFor="quote"  style={{margin:"0% 88% 0% 0%", color: "grey"}}>Quote: </label>
                            <input 
                                type="text" 
                                onClick="true"
                                name="quote" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newAlgo.quote }
                                placeholder="Why was this algorithm created?"
                            />
                        </div>
                        <div className="form-group col-xs-6">
                            {/* {
                                errors.quote ? 
                                <p className="col-sm-8 text-left text-danger">{ errors.quote }</p>
                                :
                                ''
                            } */}
                            <label className="form-check-label" htmlFor="code"  style={{margin:"0% 88% 0% 0%", color: "grey"}}>Code: </label>
                            <input 
                                type="text" 
                                onClick="true"
                                name="code" 
                                className="form-control"
                                onChange={ changeHandler }
                                value={ newAlgo.quote }
                                placeholder="Javascript"
                            />
                        </div>
                        <div className="form-group col-xs-6">
                            <input type="submit" value="Update" action="update" className="col-md-6 btn btn-primary" style={{margin:"0% 0% 0% 45%"}}/><br></br>
                            <p style={{color:"grey"}}>{ formMessage() }</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormAlgo;

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const One = props => {
    const [user, setUser] = useState({
        firstName:""
    })
    const [pirate, setPirate] = useState({
        _id: "",
        name: "",
        image: "",
        chests: "",
        position: "",
        peg: "",
        patch: "",
        hook: "",
        createdAt: "",
        updatedAt: ""
    });

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pirates/${user.id}/${props.id}`)
            .then(response => {
                if(response.data.message === "Success!")
                {
                    setPirate(response.data.results);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div style={{textAlign:"center", border:"3px solid black", width:"85%", padding:"0px 0px 0px 0px", margin:"0% 2% 0% 2%"}}>
            <div className="container" style={{textAlign:"center", width:"100%", padding:"0px 0px 0px 0px", backgroundColor:"#8b572a", color:"white", borderBottom:"2px solid black", margin:"0% 0% 0% 0%"}}>
                <h1>{ pirate.name }'s page</h1>
            </div>
        <div><br></br>
        <div className="card mb-5 card" style={{width:"80%", border:"2px solid black", margin:"0% 0% 0% 12%"}}>
            <div className="row">
                <div className="col-md-4 container">
                    <img src={ props.image } alt={props.name} style={{maxHeight:"300px", margin:"7% 0% 0% 3%"}} class="card-img" />
                </div>
                <div>  
                    <h5>"Shiver Me Timbers"</h5>
                </div>
                <div className="col-md-8 container">
                    <div className="card-body">
                    <h1 className="card-title text-center">{props.position}</h1>
                        <p class="card-text"><small class="text-muted">A {props.position} with {props.chests} chests!</small></p>
                        <Link to={ `/users/${props._id}/${props._pid}/update`}><button className="btn btn-primary btn-sm" style={{margin:"0% 0% 0% 5%"}}>Update Pirate</button></Link>&nbsp;
                        {/* <button onClick={ () => deleteHandler(props._id)(props._pid) } className="btn btn-danger btn-sm" style={{margin:"0% 0% 0% 0%"}}>Walk the Plank</button> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="card-body">
                <p class="card-text" style={{}}>Peg leg: { props.peg }</p><br></br>
                <p class="card-text" style={{}}>Eye Patch: { props.patch }</p><br></br>
                <p class="card-text" style={{}}>Hook Hand: { props.hook }</p><br></br>
            </div>
            <div>
            <Link to="/users/all" style={{margin:"0% 0% 0% 60%"}} >Return to Crew </Link> 
            </div> 
        </div>
        </div>
    )
}

export default One

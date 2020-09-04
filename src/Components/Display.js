import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const Display = props => {
    const [allUsers, setAllUsers] = useState([]);
    const [allAlgos, setAllAlgos] = useState([]);
    const [algos, setAlgos] = useState([]);
    

    const getAll = () => {
        axios.get("http://localhost:8000/api/algos/all")
            .then(response => {
                console.log(response);
                setAllUsers(response.data.results);
            });
    }
        useEffect(() => {
            getAll();
        }, []);


    const getAllAlgos = () => {
        axios.get("http://localhost:8000/api/algos")
            .then(response => {
                setAllAlgos((response.data.results).sort((b,a) => (b.name > a.name) ? 1: -1));
            });
    }
        useEffect(() => {
            getAllAlgos();
        }, []);

    
    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/algos/${id} + aid}`)
            .then(response => {
                getAll();
            })
    }
    return (
        <div>
            <div style={{ margin:"5% 2% 4% 2%"}}>
            <div style={{margin:"2% 0% 0% 0%", backgroundColor:"brown", color:"black"}}><br></br>
                <h1 style={{margin:"6% 0% 0% 0%",  backgroundColor:"brown"}}>Collection</h1>
                <Link to={ `/users/5f2445a4784acd0598b11ece/new` }><button className="col-sm-2 btn btn-success" style={{margin:"2% 0% 1% 50%"}} >Add Algo</button></Link>
            </div>
            <div className="container" style={{ alignItems:"left" }}><br></br>
                <div className="row">
                    {
                    allUsers.map((user, i) => 
                        <tr key={ i }>
                            {
                            user.algos.map((algo, i) =>
                                <tr key={ i }>
                                    <div className="d-flex p-2">
                                    <div className="card mb-5 card" style={{width:"80%", border:"2px solid black", margin:"0% 0% 0% 12%"}}>
                                        <div className="row">
                                            <div className="col-md-4 container"><br></br>
                                                <img src={ algo.image } alt={algo.name} style={{ margin:"7% 0% 2% 3%"}} class="card-img" alt={algo.name}/>
                                                <p class="card-text"><small class="text-muted">{ algo.quote }</small></p><br></br>
                                            </div>
                                            <div className="col-md-8 container">
                                                <div className="card-body">
                                                <h1 className="card-title text-center">{algo.name}</h1>
                                                    <p class="card-text"><small class="text-muted">{ algo.desc } with { algo.best } best case and { algo.worst } worst case and { algo.aver } aver case.</small></p>
                                                    <Link to={ `/users/${algo._id}/algo id here`}><button className="btn btn-primary btn-sm" style={{margin:"0% 0% 0% 5%"}}>View Algo</button></Link>&nbsp;
                                                    <button onClick={ () => deleteHandler(user._id)(algo._id) } className="btn btn-danger btn-sm" style={{margin:"0% 0% 0% 0%"}}>Delete the Algo</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </tr>
                            )
                            }
                        </tr>
                    )
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Display

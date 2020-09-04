// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Form from './Form'
// import { Link, navigate } from '@reach/router';

// const Update = props => {
//     const [user, setUser] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });
//     const [errors, setErrors] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });

//     const changeHandler = e => {
//         const curData = {
//             ...user,
//             [e.target.name]: e.target.value
//         };

//         validate(curData);
//         setUser(curData);
//     }

//     const validate = data => {
//         const { ...curErrors } = errors;
//         const eReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//         if(data.name.length == 0) {
//             curErrors.name = "This is a required field."
//         } else if(data.name.length < 2) {
//             curErrors.name = "Name must be at least 2 characters long."
//         } else if(data.name.length > 100) {
//             curErrors.name = "Server space ain't free, yo."
//         } else {
//             curErrors.name = "";
//         }

//         if(data.email.length == 0) {
//             curErrors.email = "Email is required."
//         } else if(data.email.length < 7) {
//             curErrors.email = "That can't possibly be an email address.";
//         } else if(!eReg.test(data.email)) {
//             curErrors.email = "Invalid email address."
//         } else {
//             curErrors.email = "";
//         }

//         if(data.password.length == 0){
//             curErrors.password = "Required field.";
//         } else if(data.password.length < 8) {
//             curErrors.password = "Password must be at least 8 characters long."
//         } else {
//             curErrors.password = "";
//         }

//         setErrors(curErrors);
//     }
    
//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/users/${props.id}`)
//             .then(response => {
//                 setUser(response.data.results);
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }, [])

//     const submitData = () => {
//         axios.put(`http://localhost:8000/api/users/${props.id}`, user)
//             .then(response => {
//                 console.log(response);
//                 if(response.data.message == "success"){
//                     setUser({
//                         name: "",
//                         email: "",
//                         password: ""
//                     })
//                     navigate("/");
//                 } else {
//                     setErrors({
//                         name: "Something wrong",
//                         email: "u mess up",
//                         password: "no"
//                     });
//                 }
//             })
//     }

//     const PirateButtons = pirate => {
//         let status = pirateStatus(user)
//         if (status === "No Peg"){
//             return(
//                 <td>
//                     <button onClick={onClick} className="btn btn-sm btn-success" style={{marginRight: "10px"}} value={user._id} name="No Peg">No Peg</button>
//                     <button onClick={onClick} className="btn btn-sm btn-outline-secondary" style={{marginRight: "10px"}} value={user._id} name="Yes Peg">Yes Peg</button>
//                 </td>
//             )
//         }
//         else if (status === "Yes Peg"){
//             return(
//                 <td>
//                     <button onClick={onClick} className="btn btn-sm btn-outline-secondary" style={{marginRight: "10px"}} value={user._id} name="playing">No Patch</button>
//                     <button onClick={onClick} className="btn btn-sm btn-danger" style={{marginRight: "10px"}} value={player._id} name="notPlaying">Yes Patch</button>
                    
//                 </td>
//             )
//         }
//         else {
//             return(
//                 <td>
//                     <button onClick={onClick} className="btn btn-sm btn-outline-secondary" style={{marginRight: "10px"}} value={player._id} name="playing">No Hook</button>
//                     <button onClick={onClick} className="btn btn-sm btn-outline-secondary" style={{marginRight: "10px"}} value={player._id} name="Yes">Yes Hook</button>
//                     <button onClick={onClick} className="btn btn-sm btn-warning" value={player._id} name="undecided">Undecided</button>
//                 </td>
//             )
//         }
//     }

// <Link className="col-sm-3" to="/"><button className="col-sm-12 btn btn-secondary"style={{margin:"0% 0% 0% 0%"}}>Cancel</button></Link> */}
// <div class="form-check">
//   <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
//   <label class="form-check-label" for="defaultCheck1">
//     Default checkbox
//   </label>
// </div>



// //     return (
// //         <div>
// //             <h2>Update User</h2>
// //             <Form data={ user } changeHandler={ changeHandler } errors={ errors } setData={ setUser } submitData={ submitData } />
// //         </div>
// //     )
// // }

// // export default Update

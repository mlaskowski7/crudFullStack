import axios from 'axios';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const{name, username, email} = user;

    const onChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");

    };

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">
                    Register User
                </h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="username" className='form-label'>
                            Username
                        </label>
                        <input type="text" name="username" className='form-control' value={username} onChange={(e) => onChange(e)} placeholder='Enter your username...' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className='form-label'>
                            Name
                        </label>
                        <input type="text" name="name" className='form-control' value={name}  onChange={(e) => onChange(e)} placeholder='Enter your name...' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className='form-label'>
                            Email
                        </label>
                        <input type="text" name="email" className='form-control' value={email}  onChange={(e) => onChange(e)} placeholder='Enter your email address...' />
                    </div>
                    <button type='submit' className='btn btn-outline-info'>
                        Submit
                    </button>
                    <Link to="/" className='btn btn-outline-danger mx-2'>
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
        
    </div>
  )
}

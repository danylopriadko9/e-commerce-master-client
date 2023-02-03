import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import axios from '../../axios';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`auth/register`, inputs);
      navigate('/login');
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className='auth'>
      <div className='auth_content'>
        <h1>Register</h1>
        <form>
          <div className='input_block'>
            <AiOutlineUser />
            <input
              required
              type='text'
              placeholder='username'
              onChange={handleChange}
              name='username'
            />
          </div>
          <div className='input_block'>
            <AiOutlineMail />
            <input
              required
              type='email'
              placeholder='email'
              onChange={handleChange}
              name='email'
            />
          </div>
          <div className='input_block'>
            <RiLockPasswordLine />
            <input
              required
              type='password'
              placeholder='password'
              onChange={handleChange}
              name='password'
            />
          </div>

          <button onClick={handleSubmit}>Register</button>
          {error && <p>{error}</p>}
          <span>
            Do you have an account? <Link to='/login'>Login</Link>
          </span>
          <span>
            <Link to='/'>To home page</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;

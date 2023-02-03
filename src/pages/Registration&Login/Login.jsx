import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = React.useState({
    username: '',
    password: '',
  });

  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate('/');
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className='auth'>
      <div className='auth_content'>
        <h1>Login</h1>
        <form>
          <div className='input_block'>
            <AiOutlineUser />
            <input
              required
              type='text'
              placeholder='Type your username'
              onChange={handleChange}
              name='username'
            />
          </div>
          <div className='input_block'>
            <RiLockPasswordLine />
            <input
              required
              type='password'
              placeholder='Type your password'
              onChange={handleChange}
              name='password'
            />
          </div>
          <p className='forgot'>
            <Link to='/forgot-password'>Forgot your password?</Link>
          </p>
          <button onClick={handleSubmit}>Login</button>
          {error && <p>{error}</p>}
          <span>
            Dont you have an account? <Link to='/register'>Register</Link>
          </span>
          <span>
            <Link to='/'>To home page</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;

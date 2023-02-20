import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fakeApi } from '../api';
import { setUser } from '../reducers/user/userSlice';

interface User {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export const Index = () => {
  const emailField = useRef(null);
  const passwordField = useRef(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await fakeApi.get('/users').then((response) => {
      const users = response.data;
      const userToLog: User = users.find(
        (user: { email: string }) => user.email === emailField.current?.value
      );

      if (userToLog) {
        if (userToLog.password === passwordField.current?.value) {
          console.log('Credenciales válidas');
          dispatch(
            setUser({
              email: userToLog.email,
              fullName: `${userToLog.first_name} ${userToLog.last_name}`,
              token: Date.now().toString(),
            })
          );
          navigate('/home');
        }
      }
    });
  };
  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <h2 className="mb-4">LOGIN FORM</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" ref={emailField} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              ref={passwordField}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

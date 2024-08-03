import React, { useEffect, useState } from 'react';

import Button from '../Button';
import Input from '../Input';

import closedEye from '../../assets/closedEye.svg';
import openEye from '../../assets/openEye.svg';

import { UserEmail, UserPassword } from '../../core/user';  
import { fakeApi } from '../../services/api';

import classes from './LoginForm.module.css';


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<UserEmail>("");
  const [password, setPassword] = useState<UserPassword>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onChangeShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if(!email && !password) {
      setSuccess("");
      setError("");
    }
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    setSuccess('');

    try {
      // Here is basic mocked auth, in case you pass true - you recieve Success state,
      // in case false - error state
      const response = await fakeApi({ user: { email, password }, success: false});

      if (response.success) {
        setSuccess('Success!');
      } else {
        setError('Authentification error, please try again');
      }
    } catch (error) {
      setError('Network error, please try again');
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h2>Sign in to your account</h2>
        <Input
          label="Email address:"
          type="email"
          id="login-email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password:"
          type={showPassword ? "text" : "password"}
          id="login-password"
          value={password}
          required
          autocomplete="new-password"
          iconRight={
            <span className={classes.passwordIconWrapper} onClick={onChangeShowPassword}>
              <img src={showPassword ? openEye : closedEye } className={classes.passwordIcon} alt="icon of eye" />
            </span>
          }
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className={classes.error}>{error}</p>}
        {success && <p className={classes.success}>{success}</p>}
        <Button type="submit" className={classes.button}>Sign in</Button>
      </form>
    </div>
  );
};

export default LoginForm;

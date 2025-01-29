import React, { useState, useEffect } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase';  
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);  
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);  

    return () => unsubscribe();  
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);  
      setUser(userCredential.user);  
      alert('User registered successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error);

      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('This email is already in use. Please try with another email.');  
      } else {
        setErrorMessage(error.message);  
      }
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);  
      alert('Logged out successfully!');
    }).catch((error) => {
      console.error('Error logging out:', error);
    });
  };

  return (
    <div className="signup">
      {user ? (
        <div>
          <h1>Welcome, {user.email}</h1>  
          <button onClick={handleLogout}>Logout</button>  
        </div>
      ) : (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} 
        </div>
      )}
    </div>
  );
};

export default SignUp;

import React from 'react';
import { Routes, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUp from './SignUp';


export default function App() {
  return (
    <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  )
}


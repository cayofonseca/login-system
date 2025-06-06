import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; 

function App(){

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [message, setMessage] = useState('')

const navigate = useNavigate()

const handleSubmit = (e: React.FormEvent)=>{
  e.preventDefault();
  
    if (email === "usuario@exemplo.com" && password === "senha123") {
      navigate("/dashboard");
    
      setEmail('');
      setPassword('');
    } else {
      setMessage("Email ou senha incorretos.");
    }
  };


console.log(email, password)
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="digite seu e-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="digite sua senha" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button type="submit" >Entrar</button>
      </form>

      
      {message && (
        <p className={`message ${message.includes('bem-sucedido') ? 'success' : 'error'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default App;
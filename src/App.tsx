import { useState } from 'react';
import './App.css'; 

function App(){

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

console.log(email, password)
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="digite seu e-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="digite sua senha" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;
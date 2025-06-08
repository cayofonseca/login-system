import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form'; 
import './App.css';

type Inputs = {
  email: string;
  password: string;
};

const App: React.FC = () => {

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    
    if (data.email === "usuario@exemplo.com" && data.password === "senha123") {
      navigate("/dashboard");
    } else {
      setMessage("Email ou senha incorretos.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="digite seu e-mail"
           
            {...register("email", {
              required: "O campo email é obrigatório",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Por favor, insira um email válido",
              },
            })}
          />
     
          {errors.email && <p style={{color: 'red'}} className="error-feedback">{errors.email.message}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="digite sua senha"
            
            {...register("password", {
              required: "O campo senha é obrigatório",
              minLength: {
                value: 6,
                message: "A senha deve ter no mínimo 6 caracteres",
              },
            })}
          />
  
          {errors.password && <p style={{color: 'red'}} className="error-feedback">{errors.password.message}</p>}
        </div>
        <button type="submit">Entrar</button>
      </form>

      {message && <p className={`message error`}>{message}</p>}

      <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
        Não tem uma conta?{' '}
        <Link to="/register" style={{ color: '#8A2BE2', fontWeight: 'bold' }}>
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}

export default App;
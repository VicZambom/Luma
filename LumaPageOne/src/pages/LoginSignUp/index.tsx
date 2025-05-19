import { useState } from "react";
import { LeftImageSection } from "../../components/LeftSection";
import { Container } from "./styles";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CenterFocusWeakOutlinedIcon from "@mui/icons-material/CenterFocusWeakOutlined";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import Logo from "../../assets/LogoFudida.png";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

type LoginSignUpProps = {
  onLogin: (msg: string) => void;
};

type User = {
  email: string;
  cpf: string;
  senha: string;
};

export function LoginSignUp({ onLogin }: LoginSignUpProps) {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [errorUsuario, setErrorUsuario] = useState("");
  const [errorSenha, setErrorSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Mock "banco de dados" com dois usuários
  const usuariosMock: User[] = [
    {
      email: "isabela@gmail.com",
      cpf: "123.456.789-00",
      senha: "senha123",
    },
    {
      email: "carlos@gmail.com",
      cpf: "987.654.321-00",
      senha: "senha456",
    },
  ];

  // Validação do campo usuário (não vazio)
  const validarUsuario = (value: string) => {
    if (!value.trim()) {
      return "O usuário é obrigatório";
    }
    return "";
  };

  // Validação da senha (mínimo 6 caracteres)
  const validarSenha = (value: string) => {
    if (!value) {
      return "A senha é obrigatória";
    }
    if (value.length < 6) {
      return "A senha deve ter ao menos 6 caracteres";
    }
    return "";
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Limpar erros antigos
    setErrorUsuario("");
    setErrorSenha("");

    // Validar campos localmente
    const usuarioError = validarUsuario(usuario);
    const senhaError = validarSenha(senha);

    if (usuarioError || senhaError) {
      setErrorUsuario(usuarioError);
      setErrorSenha(senhaError);
      return;
    }

    // Simula busca no "banco de dados"
    const usuarioEncontrado = usuariosMock.find(
      (u) =>
        u.email.toLowerCase() === usuario.toLowerCase() || u.cpf === usuario
    );

    if (!usuarioEncontrado) {
      setErrorUsuario("Usuário não encontrado");
      return;
    }

    if (usuarioEncontrado.senha !== senha) {
      setErrorSenha("Senha incorreta");
      return;
    }

    // Se chegou aqui, login OK
    onLogin(`Usuário ${usuarioEncontrado.email} logado!`);
    navigate("/app/inicio");
  };

  return (
    <Container>
      <LeftImageSection />

      <div className="rightContent">
        <div className="formHeader">
          <h1>Faça login</h1>
        </div>

        <form className="loginForm" onSubmit={handleLogin}>
          <div className="inputGroup">
            <p>Por favor, informe suas credenciais de login.</p>
            <label htmlFor="usuario">Usuário:</label>
            <input
              type="text"
              id="usuario"
              placeholder="Insira seu CPF ou Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
            {errorUsuario && (
              <p
                id="usuario-error"
                style={{
                  color: "red",
                  fontSize: "0.8rem",
                  marginTop: "0.5rem",
                }}
              >
                {errorUsuario}
              </p>
            )}
          </div>

          <div className="inputGroup">
            <label htmlFor="senha">Senha:</label>
            <div className="inputWithIcon">
              <input
                type={showPassword ? "text" : "password"}
                id="senha"
                placeholder="Insira sua Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <VisibilityOutlinedIcon
                className="icon"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              />
            </div>
            {errorSenha && (
              <p
                id="senha-error"
                style={{
                  color: "red",
                  fontSize: "0.8rem",
                  marginTop: "0.5rem",
                }}
              >
                {errorSenha}
              </p>
            )}
          </div>

          <div className="rememberForgot">
            <a href="#">Esqueceu sua senha?</a>
          </div>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            className="loginButton"
          >
            Vamos lá!
          </Button>
        </form>

        <div className="registerLink">
          <Divider>
            <span>ou</span>
          </Divider>
          <CenterFocusWeakOutlinedIcon className="photoIcon" />
          <p className="registerTextArea">
            Não possui uma conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>

        <footer className="loginFooter">
          <a href="#">Política de Privacidade |</a>
          <a href="#"> Termos de Serviço</a>
        </footer>
      </div>
      <div className="logoWrapper">
        <img src={Logo} alt="logo da Luma" />
      </div>
    </Container>
  );
}

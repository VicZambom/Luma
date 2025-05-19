import { RightImageSection } from "../../components/RightSection";
import { Container } from "./style";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import Logo from "../../assets/LogoFudida.png";

import { Link, useNavigate } from "react-router-dom";

type CadastroSignUpProps = {
  // eslint-disable-next-line no-unused-vars
  onRegister: (msg: string) => void;
};

export function CadastroSignUp({ onRegister }: CadastroSignUpProps) {
  const navigate = useNavigate();
  const handleCadastro = () => {
    onRegister("Usuário Registrado!");
    navigate("/CadastroSignUp");
  };

  return (
    <Container>
      <div className="logoWrapper">
        <img src={Logo} alt="Logo da Luma" />
      </div>

      <div className="leftContent">
        <div className="formHeader">
          <h1>Crie sua conta</h1>
          <p>Preencha os campos para se cadastrar.</p>
        </div>

        <form className="signUpForm">
          <div className="inputGroup">
            <label htmlFor="nome">Nome completo:</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" placeholder="Digite seu CPF" required />
          </div>

          <div className="inputGroup">
            <label htmlFor="username">Nome de usuário:</label>
            <input
              type="text"
              id="username"
              placeholder="Escolha um nome de usuário"
              required
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="senha">Senha:</label>
            <div className="inputWithIcon">
              <input
                type="password"
                id="senha"
                placeholder="Crie uma senha"
                required
              />
              <VisibilityOutlinedIcon className="icon" />
            </div>
          </div>

          <div className="inputGroup">
            <label htmlFor="confirmarSenha">Confirmar senha:</label>
            <div className="inputWithIcon">
              <input
                type="password"
                id="confirmarSenha"
                placeholder="Confirme sua senha"
                required
              />
              <VisibilityOutlinedIcon className="icon" />
            </div>
          </div>
        </form>

        <Button
          fullWidth
          variant="contained"
          onClick={handleCadastro}
          className="registerButton"
        >
          Cadastrar
        </Button>

        <div className="loginLink">
          <Divider>
            <span>ou</span>
          </Divider>
          <p className="registerTextArea">
            Já tem uma conta? <Link to="/">Faça login</Link>
          </p>
        </div>

        <footer className="loginFooter">
          <a href="#">Política de Privacidade |</a>
          <a href="#"> Termos de Serviço</a>
        </footer>
      </div>

      <RightImageSection />
    </Container>
  );
}

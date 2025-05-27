import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DefaultLayout } from "./components/MainLayout/DefaultLayout";
import { Home } from "./pages/Home";
import { PontoPage } from "./pages/Ponto/PontoPage";
import { RegistrarPonto } from "./pages/Ponto/RegistrarPonto";
import { LoginSignUp } from "./pages/LoginSignUp";
import { CadastroSignUp } from "./pages/CadastroSignUp";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { EspelhoPontoPage } from "./pages/EspelhoPonto/EspelhoPontoPage";
import { SolicitarAbonoPage } from "./pages/abono";
import ErrorPage from "./components/ErrorPage/ErrorPage"; // Importe o componente ErrorPage

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignUp onLogin={() => {}} />} />
          <Route
            path="/cadastro"
            element={<CadastroSignUp onRegister={() => {}} />}
          />

          <Route path="/app" element={<DefaultLayout />}>
            <Route index element={<Navigate to="inicio" replace />} />
            <Route path="inicio" element={<Home />} />
            <Route path="ponto" element={<PontoPage />} />
            <Route
              path="ponto/registrar"
              element={<RegistrarPonto userId="string" />}
            />
            <Route
              path="espelhoponto"
              element={<EspelhoPontoPage />}
            />
            <Route
              path="abono/solicitar"
              element={<SolicitarAbonoPage />}
            />
          </Route>

          {/* Rota curinga para qualquer URL não correspondente */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
// src/main.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DefaultLayout } from "./components/MainLayout/DefaultLayout";
import { Home } from "./pages/Home";
import { PontoPage } from "./pages/Ponto/PontoPage";
import { RegistrarPonto } from "./pages/Ponto/RegistrarPonto";
import { LoginSignUp } from "./pages/LoginSignUp";
import { CadastroSignUp } from "./pages/CadastroSignUp";

export function App() {
  return (
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
        </Route>

        <Route path="*" element={<Navigate to="/app/inicio" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

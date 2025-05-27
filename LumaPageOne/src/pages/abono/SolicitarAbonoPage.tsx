import React from 'react';
import { Main } from '../../components/SideBarPages';
import { UserInfoCard } from '../../components/Abono/UserInfoCard';
import { UserCardInfo } from '../../components/UserInfo';
import { AbonoForm } from '../../components/Abono/AbonoForm';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const SolicitarAbonoPage = () => {
  const userName = "Carlos Moraes";
  const userRole = "QA (Quality Assurance)";
  const avatarUrl = ""; // Adicionar URL da imagem se disponível
  const entradas = 4;
  const saidas = 0;
  const faltas = 3;
  const currentDate = "14/05/2025"; // Em breve será dinâmico
  const [showForm, setShowForm] = React.useState(false);

  const handleSolicitarAbonoClick = () => {
    console.log('Botão Solicitar Abono clicado!');
    setShowForm(true);
  };

  return (
    <Main>
       <h2>Olá, Carlos</h2>
        <UserCardInfo
           name={userName}
           descricao={userRole}
           avatar={avatarUrl}
           entradas={entradas}
           saida={saidas}
           faltas={faltas}
           cardWidth={"100%"}
           />

    <Box sx={{ backgroundColor: 'white', padding: 3, borderRadius: 3, marginTop: 3 }}>

        <AbonoForm />
      
        <Button variant="contained" onClick={handleSolicitarAbonoClick} sx={{ mt: 3, backgroundColor: 'rgba(105, 69, 164)' }}>
          Solicitar Abono
        </Button>
       
      </Box>
    </Main>
  );
};
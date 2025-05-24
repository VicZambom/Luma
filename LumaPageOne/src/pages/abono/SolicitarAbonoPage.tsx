import React from 'react';
import { Main } from '../../components/SideBarPages';
import { UserInfoCard } from '../../components/Abono/UserInfoCard';
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
    setShowForm(true);
  };

  return (
    <Main>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6">Solicitar Abono</Typography>
        <Typography variant="body2">{currentDate}</Typography>
      </Box>
      <UserInfoCard
        name={userName}
        descricao={userRole}
        avatar={avatarUrl}
        entradas={entradas}
        saida={saidas}
        faltas={faltas}
        cardWidth={"100%"}
      />
      {!showForm ? (
        <Button variant="contained" onClick={handleSolicitarAbonoClick} sx={{ mt: 3 }}>
          Solicitar Abono
        </Button>
      ) : (
        <AbonoForm />
      )}
    </Main>
  );
};
import { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { Main } from '../../components/SideBarPages';
import { UserCardInfo } from '../../components/UserInfo';
import { PointRecordTable } from '../../components/EspelhoPonto/PointRecordTable';
import { PeriodSelector } from '../../components/EspelhoPonto/PeriodSelector';
import { PointActions } from '../../components/EspelhoPonto/PointActions';

export const EspelhoPontoPage = () => {
  const userName = "Carlos Moraes"; 
  const userRole = "QA (Quality Assurance)"; 
  const avatarUrl = ""; 
  const entradas = 4; 
  const saidas = 3;
  const faltas = 0; 
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Estado para o mês atual (inicializado com a data atual)
  const pointRecords = [
    { date: "15/05", entrada: "", saida: "" },
    { date: "16/05", entrada: "", saida: "" },
    { date: "17/05", entrada: "", saida: "" },
    { date: "18/05", entrada: "", saida: "" },
    { date: "19/05", entrada: "", saida: "" },
    { date: "20/05", entrada: "", saida: "" },
    { date: "21/05", entrada: "", saida: "" },
    { date: "22/05", entrada: "", saida: "" },
  ]; 

 const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() - 1);
      return newMonth;
    });
    // Aqui você também pode chamar uma função para buscar os dados do novo mês
     console.log("Mês anterior");
   };
 
   const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + 1);
      return newMonth;
    });
    // Aqui você também pode chamar uma função para buscar os dados do novo mês
     console.log("Próximo mês");
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

        {/* Container principal */}
        <Box sx={{ padding: 3 }}/>

          {/* Título com Seta para a Esquerda */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}> 
            <Typography variant="h6">Espelho de Ponto</Typography>
            </Box>

        {/* Caixa de Período (Centralizada) */}
       {/* Caixa de Período (Centralizada) */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
        <PeriodSelector
          currentMonth={new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'long' }).format(currentMonth).toUpperCase()}
          onPrevious={handlePreviousMonth}
          onNext={handleNextMonth}
        />
      </Box>

      {/* Separador visual */}
      <Box sx={{ mt: 4 }}>
        <Divider />
      </Box>

         {/* Container Principal (Layout em Linha) */}
          <Box
            sx={{
              display: 'flex',
              gap: 5,
              alignItems: 'flex-start',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >

         {/* Parte Esquerda: Lista de Datas, Entrada e Saída */}
          <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' } }}> {/* Largura total em xs */}
            <PointRecordTable records={pointRecords} />
          </Box>

          {/* Parte Direita: Botões de Ação */}
          <PointActions />
            </Box>
    </Main>
  );
};
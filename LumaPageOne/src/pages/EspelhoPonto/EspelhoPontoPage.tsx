import React from 'react';
import { Main } from '../../components/SideBarPages';
import { UserCardInfo } from '../../components/UserInfo';
import { PointRecordTable } from '../../components/EspelhoPonto/PointRecordTable';
import { PeriodSelector } from '../../components/EspelhoPonto/PeriodSelector';
import { PointActions } from '../../components/EspelhoPonto/PointActions';

export const EspelhoPontoPage = () => {
  const userName = "Carlos Moraes"; // Em breve será dinâmico
  const userRole = "QA (Quality Assurance)"; // Em breve será dinâmico
  const avatarUrl = ""; // Em breve será dinâmico
  const entradas = 4; // Em breve será dinâmico
  const saidas = 3; // Em breve será dinâmico
  const faltas = 0; // Em breve será dinâmico
  const currentMonth = "MAIO 2025"; // Em breve será dinâmico
  const pointRecords = [
    { date: "15/05", entrada: "", saida: "" },
    { date: "16/05", entrada: "", saida: "" },
    { date: "17/05", entrada: "", saida: "" },
    { date: "18/05", entrada: "", saida: "" },
    { date: "19/05", entrada: "", saida: "" },
    { date: "20/05", entrada: "", saida: "" },
    { date: "21/05", entrada: "", saida: "" },
    { date: "22/05", entrada: "", saida: "" },
    // ... mais dias do mês
  ]; // Em breve será dinâmico

  const handlePreviousMonth = () => {
    // Lógica para navegar para o mês anterior
    console.log("Mês anterior");
  };

  const handleNextMonth = () => {
    // Lógica para navegar para o próximo mês
    console.log("Próximo mês");
  };

  return (
    <Main>
      <h2>Espelho de Ponto</h2>
      <UserCardInfo
        name={userName}
        descricao={userRole}
        avatar={avatarUrl}
        entradas={entradas}
        saida={saidas}
        faltas={faltas}
        cardWidth={"100%"}
      />
      <PeriodSelector
        currentMonth={currentMonth}
        onPrevious={handlePreviousMonth}
        onNext={handleNextMonth}
      />
      <PointRecordTable records={pointRecords} />
      <PointActions />
    </Main>
  );
};
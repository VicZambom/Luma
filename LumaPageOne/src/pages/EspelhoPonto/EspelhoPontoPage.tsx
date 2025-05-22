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
  const currentMonth = "MAIO 2025"; 
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
    console.log("Mês anterior");
  };

  const handleNextMonth = () => {
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
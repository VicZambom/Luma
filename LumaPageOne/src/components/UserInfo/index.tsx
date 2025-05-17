import { styled } from "@mui/material/styles";
import avatarPhoto from "../../assets/carlosPhoto.png";

const UserCardContainer = styled("div")<{ cardWidth: string }>`
  background: #5d3998;
  background: linear-gradient(
    176deg,
    rgba(93, 57, 152, 1) 0%,
    rgba(142, 108, 172, 1) 100%
  );
  height: 10.2rem;
  padding: 32px 0;
  width: ${(props) => props.cardWidth};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
`;

const AvatarImage = styled("img")`
  width: 6.1rem;
  height: 5.8rem;
  border-radius: 50%;
`;

const UserInfoName = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.1rem;
  margin-right: auto;
`;

const UserInfoDescription = styled("p")({
  color: "#C0C4CC",
  marginBottom: "1rem",
  fontSize: "0.875rem",
});

const InfoItemRoot = styled("div")`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  align-items: center;
  gap: 1.5rem;
  margin: 0;
`;

const InfoText = styled("span")({
  color: "#C0C4CC",
});
const NameInfoText = styled("span")({
  color: "#FFF",
});

const InfoNumber = styled("span")`
  font-size: 1rem;
  margin-top: 1rem;
  margin-right: 5.375rem;
  margin-left: 5.375rem;
  color: #fff;
  font-weight: bold;
`;

interface UserInfoProps {
  name: string;
  descricao: string;
  avatar: string;
  entradas: number;
  saida: number;
  faltas: number;
  cardWidth: string;
  entradasStyle?: React.CSSProperties;
  saidaStyle?: React.CSSProperties;
  faltasStyle?: React.CSSProperties;
}

export function UserCardInfo({
  name,
  descricao,
  entradas,
  saida,
  faltas,
  cardWidth,
  entradasStyle,
  saidaStyle,
  faltasStyle,
}: UserInfoProps) {
  return (
    <UserCardContainer cardWidth={cardWidth}>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexGrow: 1,
          }}
        >
          <AvatarImage src={avatarPhoto} alt={name} />
          <UserInfoName>
            <NameInfoText>{name}</NameInfoText>
            <UserInfoDescription>{descricao}</UserInfoDescription>
          </UserInfoName>
        </div>
        <div style={{ display: "flex", gap: "1rem", marginLeft: "auto" }}>
          <InfoItemRoot style={entradasStyle}>
            <InfoNumber>{entradas}</InfoNumber>
            <InfoText>Entradas</InfoText>
          </InfoItemRoot>
          <InfoItemRoot style={saidaStyle}>
            <InfoNumber>{saida}</InfoNumber>
            <InfoText>Saída</InfoText>
          </InfoItemRoot>
          <InfoItemRoot style={faltasStyle}>
            <InfoNumber>{faltas}</InfoNumber>
            <InfoText>Faltas</InfoText>
          </InfoItemRoot>
        </div>
      </div>
    </UserCardContainer>
  );
}

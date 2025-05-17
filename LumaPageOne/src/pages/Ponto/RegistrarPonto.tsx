import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Divider,
  SnackbarCloseReason,
} from "@mui/material";
import {
  ArrowBackIosOutlined as ArrowBack,
  RestaurantOutlined,
} from "@mui/icons-material";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { UserCardInfo } from "../../components/UserInfo";
import { Greeting } from "../../components/saudacao";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

interface RegistrarPontoProps {
  userId: "string";
}

export function RegistrarPonto({ userId }: RegistrarPontoProps) {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  console.log("ID do Usuário", userId);

  const simulatedUserLocation = {
    lat: -8.05,
    lng: -34.9,
  };
  const zoomLevel = 15;

  const handleBaterPonto = () => {
    console.log("Ponto batido!");
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = (
    _event: React.SyntheticEvent | Event | undefined,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const userName = "Carlos";

  const userInfoData = {
    name: "Carlos Moraes",
    descricao: "QA (Quality Assurance)",
    avatar: "/images/carlos_photo.jpg",
    entradas: 4,
    saida: 3,
    faltas: 0,
  };

  const handleVoltar = () => {
    navigate("/app/ponto");
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingTop: "5.5rem",
        }}
      >
        <Box sx={{ marginBottom: "2.5rem", marginLeft: 1.5 }}>
          <Greeting name={userName} />
        </Box>
      </Box>
      <Box sx={{ marginLeft: "1rem", marginTop: "-4.5rem" }}>
        <UserCardInfo {...userInfoData} cardWidth="100%" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 3,
          mb: -3,
          paddingLeft: "1.8rem",
        }}
      >
        <Divider
          orientation="vertical"
          sx={{
            height: "20px",
            width: "3px",
            bgcolor: "#5D3998",
            mr: 0.5,
          }}
        />
        <Typography variant="subtitle1" color="textSecondary">
          Registrar Ponto
        </Typography>
      </Box>

      <Box
        sx={{
          padding: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: { xs: "100%", lg: "100%" },
            maxWidth: "100%",
            flexShrink: 0,
            borderRadius: "10px",
            padding: 3,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            mt: 2,
          }}
        >
          <IconButton
            onClick={handleVoltar}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <ArrowBack />
          </IconButton>

          <Typography variant="h5" fontWeight="bold" mb={2}>
            Registrar ponto
          </Typography>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Registrar ponto
            </Typography>

            {/* Container principal em Grid */}
            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "480px 1fr",
                },
                gridTemplateRows: {
                  xs: "auto auto auto",
                  md: "1fr auto",
                },
                mb: 2,
              }}
            >
              {/* MARCAÇÕES DE HOJE */}
              <Paper
                sx={{
                  gridRow: { xs: "1", md: "1 / 3" },
                  gridColumn: "1",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  p: 2,
                  background: "rgba(105, 69, 164, 0.13)",
                  border: "1px solid #5D3998",
                }}
              >
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                    MARCAÇÕES DE HOJE
                  </Typography>
                  <Divider sx={{ mb: 1, mt: 2, background: "#5D3998" }} />

                  <Box
                    sx={{
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      p: "0.5rem 1rem",
                      my: 0,
                    }}
                  >
                    <Typography>Quarta-feira |</Typography>
                    <Typography sx={{ ml: 1 }}>09:10:12</Typography>
                  </Box>

                  <Divider sx={{ mb: 1, mt: 1, background: "#5D3998" }} />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Paper
                    sx={{
                      borderRadius: "50%",
                      width: 150,
                      height: 150,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      bgcolor: "primary.main",
                      color: "white",
                      cursor: "pointer",
                      background:
                        "linear-gradient(180deg, #5D3998 0%, #8E6CAC 100%)",
                    }}
                    onClick={handleBaterPonto}
                  >
                    <Typography fontWeight="bold" variant="h6">
                      Bater ponto
                    </Typography>
                    <Typography variant="caption">Clique duas vezes</Typography>
                  </Paper>
                </Box>
              </Paper>

              {/* MAPA */}
              <Box
                sx={{
                  gridRow: "1",
                  gridColumn: { xs: "1", md: "2" },
                  height: { xs: "300px", md: "400px" },
                  borderRadius: "10px",
                  border: "1px solid #5D3998",
                  overflow: "hidden",
                }}
              >
                <MapContainer
                  center={simulatedUserLocation}
                  zoom={zoomLevel}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={simulatedUserLocation}>
                    <Popup>Você está aqui!</Popup>
                  </Marker>
                </MapContainer>
              </Box>

              {/* ESCALA DE HOJE */}
              <Paper
                sx={{
                  gridRow: { xs: "3", md: "2" },
                  gridColumn: { xs: "1", md: "2" },
                  borderRadius: "10px",
                  p: 2,
                  border: "1px solid #5D3998",
                  background: "rgba(105, 69, 164, 0.13)",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  ESCALA DE HOJE
                </Typography>
                <Divider sx={{ mb: 1, mt: 2, background: "#5D3998" }} />
                <Typography>Horário Esperado</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    lineHeight: "1.5",
                    mt: 1,
                  }}
                >
                  <Typography mr={1}>08:00</Typography>
                  <Typography>-----</Typography>
                  <Typography mx={1}>12:00</Typography>
                  <Typography>----</Typography>
                  <RestaurantOutlined sx={{ mx: 1, verticalAlign: "middle" }} />
                  <Typography>----</Typography>
                  <Typography mx={1}>13:00</Typography>
                  <Typography>-----</Typography>
                  <Typography ml={1}>18:00</Typography>
                </Box>
              </Paper>
            </Box>

            {/* Snackbar de confirmação */}
            <Snackbar
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={handleCloseSnackbar}
                severity="success"
                sx={{ width: "100%" }}
              >
                Ponto registrado com sucesso!
              </Alert>
            </Snackbar>
          </Box>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
              sx={{ width: "100%" }}
            >
              Ponto registrado com sucesso!
            </Alert>
          </Snackbar>
        </Paper>
      </Box>
    </>
  );
}

// src/pages/Ponto/PontoPage.tsx

import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import {
  AccessTimeOutlined,
  EditNoteOutlined,
  PunchClock,
} from "@mui/icons-material";
import { Main } from "../../components/SideBarPages";
import { UserCardInfo } from "../../components/UserInfo";
import { Greeting } from "../../components/saudacao";
import { PontoHome } from "./Ponto";
import { Link, Outlet } from "react-router-dom";

export const PontoPage: React.FC = () => {
  const userName = "Carlos";

  const userInfoData = {
    name: "Carlos Moraes",
    descricao: "QA (Quality Assurance)",
    avatar: "/images/carlos_photo.jpg",
    entradas: 4,
    saida: 3,
    faltas: 0,
  };

  const pontoHomeItems = [
    {
      icon: <AccessTimeOutlined sx={{ fontSize: "3rem" }} />,
      title: "Registrar Ponto",
      path: "registrar", // apenas o segmento final
    },
    {
      icon: <EditNoteOutlined sx={{ fontSize: "3rem" }} />,
      title: "Solicitar Abono",
      path: "solicitar-abono",
    },
    {
      icon: <PunchClock sx={{ fontSize: "3rem" }} />,
      title: "Espelho de Ponto",
      path: "espelho-de-ponto",
    },
  ];

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Main
        sx={{
          width: "100%",
        }}
      >
        <Greeting name={userName} />

        <UserCardInfo {...userInfoData} cardWidth="100%" />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 3,
            mb: 2,
            ml: 2,
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
            Ponto
          </Typography>
        </Box>

        {/* Links para as sub-páginas de Ponto */}
        <Box sx={{ display: "inline-block" }}>
          {pontoHomeItems.map((item) => (
            <Link
              key={item.title}
              to={`/app/ponto/${item.path}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                width: "100%",
              }}
            >
              <PontoHome icon={item.icon} title={item.title} />
            </Link>
          ))}
        </Box>

        {/* Outlet: renderiza RegistrarPonto, SolicitarAbono, Espelho, etc */}
        <Box sx={{ mt: 4, width: "100%" }}>
          <Outlet />
        </Box>
      </Main>
    </Box>
  );
};

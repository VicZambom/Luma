import React from 'react';
import { Card, CardContent, Avatar, Typography, Grid, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person'; // Ícone padrão para o avatar

interface UserInfoCardProps {
  name: string;
  descricao: string;
  avatar?: string;
  entradas: number;
  saida: number;
  faltas: number;
  cardWidth?: string;
}

export const UserInfoCard: React.FC<UserInfoCardProps> = ({
  name,
  descricao,
  avatar,
  entradas,
  saida,
  faltas,
  cardWidth = 'auto',
}) => {
  return (
    <Card sx={{ width: cardWidth, mb: 2 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar src={avatar} sx={{ width: 56, height: 56 }}>
              {!avatar && <PersonIcon />}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {descricao}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center" spacing={1}>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  <Box fontWeight="bold" display="flex" alignItems="center">
                    <Box mr={0.5}>{entradas}</Box> Entradas
                  </Box>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  <Box fontWeight="bold" display="flex" alignItems="center">
                    <Box mr={0.5}>{saida}</Box> Saídas
                  </Box>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  <Box fontWeight="bold" display="flex" alignItems="center">
                    <Box mr={0.5}>X{faltas}</Box> Faltas
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
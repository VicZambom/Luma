import React from 'react';
import { Button, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import HistoryIcon from '@mui/icons-material/History';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const PointActions = () => {
  return (
    <Stack spacing={2}>
      <Button variant="outlined" startIcon={<DownloadIcon />} size="large">
        Baixar espelho de ponto
      </Button>
      <Button variant="outlined" size="large">
        Acessar resumo do período
      </Button>
      <Button variant="outlined" startIcon={<AccessTimeIcon />} size="large">
        Banco de horas
      </Button>
    </Stack>
  );
};
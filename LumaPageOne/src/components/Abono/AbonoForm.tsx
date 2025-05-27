import React from 'react';
import { TextField, Button, Typography, Box, Input } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const AbonoForm = () => {
   const handleEnviarClick = () => {
    // Lógica para enviar a solicitação de abono
    console.log('Solicitação de abono enviada');
  };

  const handleAnexarDocumentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Arquivo anexado:', file.name);
      // Lógica para processar o arquivo anexado
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <ArrowBackIcon sx={{ mr: 1 }} /> Solicitar Abono
      </Typography>
      <Box sx={{ backgroundColor:  'rgba(105, 69, 164, 0.1)', padding: 3, borderRadius: 3, marginTop: 3 }}>
      <TextField
        label="Nome do funcionário"
        value="Carlos Moraes" // Valor estático, em breve será dinâmico
        fullWidth
        margin="normal"
        sx={{backgroundColor: 'white'}}
        disabled
      />
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Data início"
          type="date"
          fullWidth
          margin="normal"
          sx={{backgroundColor: 'white'}}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Data final"
          type="date"
          fullWidth
          margin="normal"
          sx={{backgroundColor: 'white'}}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}> {/* Alteração aqui */}
        <TextField
          label="Justifique-se"
          multiline
          rows={4}
          margin="normal"
          sx={{ width: 600, backgroundColor:'white' }} // Define a largura para 50% do contêiner pai
        />
        <Box
          sx={{
            border: '1px dashed grey',
            p: 2,
            borderRadius: 1,
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '600px', // Adicione uma largura mínima para evitar que fique muito estreito
            backgroundColor: 'white'
          }}
        >
          <Typography color="rgba(105, 69, 164)">Link ou arraste e solte</Typography>
          <Typography color="textSecondary" variant="caption">
            SVG, PNG, JPG (max. 3MB)
          </Typography>
          <Input type="file" sx={{ display: 'none', color: 'rgba(105, 69, 164)' }} id="anexar-documento" onChange={handleAnexarDocumentoChange} />
          <label htmlFor="anexar-documento">
            <Button component="span" sx={{ mt: 1, color: 'rgba(105, 69, 164)' }} variant="outlined" size="small">
              Anexar documento
            </Button>
          </label>
        </Box>
      </Box>
    </Box>
  </Box>

  );
};
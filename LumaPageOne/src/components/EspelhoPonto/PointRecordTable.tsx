import React from 'react';
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';

interface PointRecord {
  date: string;
  entrada: string;
  saida: string;
}

interface PointRecordTableProps {
  records: PointRecord[];
}

export const PointRecordTable: React.FC<PointRecordTableProps> = ({ records }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell align="right">Entrada</TableCell>
            <TableCell align="right">Saída</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record) => (
            <TableRow
              key={record.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {record.date}
              </TableCell>
              <TableCell align="right">{record.entrada}</TableCell>
              <TableCell align="right">{record.saida}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
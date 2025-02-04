import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Widgets.css';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function Widgets() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/weather', {
          params: { city: 'Phoenix' }, // Replace 'Phoenix' with a dynamic city name if needed
        });
        console.log('API Response:', response.data);

        const data = response.data;
        setWeather({
          location: { name: data.name },
          current: { temperature: data.main.temp },
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Failed to fetch weather data. Please try again.');
      }
    };

    fetchWeather();

  }, []);

  const rows = [
    createData('White Sugar', 25, 6.0, 24),
    createData('Dark Brown Sugar', 20, 9.0, 37),
    createData('Truvia Stevia Extract', 25, 16.0, 24),
    
  ];


  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Amount&nbsp;(g)</TableCell>
          <TableCell align="right">Melting Point&nbsp;(°C)</TableCell>
          <TableCell align="right">Time&nbsp;(min)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default Widgets;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogActions,
  DialogContent, DialogTitle
} from '@mui/material';

const API_URL = "http://127.0.0.1:5000/people"; // Flask API URL

export default function HomePage() {
  const [people, setPeople] = useState([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", favorite_animal: "", age: "", favorite_color: "" });
  const [editId, setEditId] = useState(null);

  // Fetch data from Flask API
  useEffect(() => {
    fetchPeople();
  }, []);

	// GET function 'fetchPeople'
  const fetchPeople = async () => {
    try {
      const response = await axios.get(API_URL);
      setPeople(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Open the form modal
  const handleOpen = (person = null) => {
    if (person) {
      setFormData(person);
      setEditMode(true);
      setEditId(person.id);
    } else {
      setFormData({ name: "", favorite_animal: "", age: "", favorite_color: "" });
      setEditMode(false);
      setEditId(null);
    }
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Submit new person (POST) or update (PUT)
  const handleSubmit = async () => {
    try {
      if (editMode) {
        await axios.put(`${API_URL}/${editId}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      fetchPeople();
      handleClose();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Delete a person
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchPeople();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Person Table</h1>

      <TableContainer component={Paper} sx={{ marginTop: "20px", marginBottom: "20px"}}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Favorite Animal</TableCell>
              <TableCell align="right">Favorite Color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((person) => (
              <TableRow key={person.id}>
                <TableCell component="th" scope="row">{person.name}</TableCell>
                <TableCell align="right">{person.age}</TableCell>
                <TableCell align="right">{person.favorite_animal}</TableCell>
                <TableCell align="right">{person.favorite_color}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" color="primary" size="small" onClick={() => handleOpen(person)}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" size="small" onClick={() => handleDelete(person.id)} style={{ marginLeft: "10px" }}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add Person
      </Button>

      {/* Modal for Adding/Editing Person */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editMode ? "Edit Person" : "Add Person"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Favorite Animal"
            name="favorite_animal"
            fullWidth
            value={formData.favorite_animal}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Age"
            name="age"
            type="number"
            fullWidth
            value={formData.age}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Favorite Color"
            name="favorite_color"
            fullWidth
            value={formData.favorite_color}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary">{editMode ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
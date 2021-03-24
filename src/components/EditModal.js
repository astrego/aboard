import React, { useState, useContext } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { v4 as uuidv4 } from 'uuid';

import { boardContext } from '../context/Provider';
import { TextField } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EA7317',
    },
    secondary: {
      main: '#3DA5D9',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const modalStyleShow = {
  visibility: 'visible',
  position: 'absolute',
  left: '35%',
  top: '25%',
  width: 400,
  height: 340,
  backgroundColor: 'white',
  textAlign: 'center',
  borderRadius: 12,
  border: '3px solid #2364AA',
  boxShadow: `0 14px 28px rgba(0,0,0,0.25)`,
};

const modalStyleHidden = {
  visibility: 'hidden',
  position: 'absolute',
};

const buttonStyleSubmit = {
  position: 'absolute',
  width: 100,
  bottom: 20,
  left: 210,
  color: 'white',
  cursor: 'pointer',
};

const buttonStyleCancel = {
  position: 'absolute',
  width: 100,
  bottom: 20,
  left: 100,
  color: 'white',
};

const EditModal = (props) => {
  const [member, setMember] = useState('');
  const [color, setColor] = useState('');

  const [time, setTime] = useState('');

  const {
    showEditModal,
    changeShowEditModal,
    handleSubmit,
    data,
    icon,
    stickerId,
    changeData,
  } = useContext(boardContext);

  const classes = useStyles();

  const handleInput = (event) => {
    setTime(event.target.value);
  };

  const handleMember = (event) => {
    setMember(event.target.value);
  };

  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const tempSticker = data.find((item) => item.id === stickerId);

    const tempData = data.filter((item) => item.id !== stickerId);
    const newSticker = {
      id: uuidv4(),
      icon,
      member,
      color,
      time,
      day: tempSticker.day,
      order: tempSticker.order,
    };
    const newData = [...tempData, newSticker];
    changeData(newData);

    setMember('');
    setColor('');
    setTime('');
    changeShowEditModal();
  };

  return (
    <div style={showEditModal ? modalStyleShow : modalStyleHidden}>
      <h3>{props.title}</h3>
      <form onSubmit={submitHandler}>
        <FormControl className={classes.formControl}>
          <InputLabel>Who</InputLabel>
          <Select value={member} onChange={handleMember}>
            <MenuItem value="Mama">Mama</MenuItem>
            <MenuItem value="Papa">Papa</MenuItem>
            <MenuItem value="Opa Ahmed">Opa Ahmed</MenuItem>
            <MenuItem value="Oma Jannie">Oma Jannie</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel>Color</InputLabel>
          <Select value={color} onChange={handleColor}>
            <MenuItem value="red">red</MenuItem>
            <MenuItem value="yellow">yellow</MenuItem>
            <MenuItem value="green">green</MenuItem>
            <MenuItem value="LightSkyBlue">blue</MenuItem>
            <MenuItem value="pink">pink</MenuItem>
            <MenuItem value="Plum">purple</MenuItem>
          </Select>
        </FormControl>
        <br />

        <FormControl className={classes.formControl}>
          <TextField
            id="time"
            label="Time"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={handleInput}
          />
        </FormControl>
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disableElevation
            style={buttonStyleSubmit}
            onClick={submitHandler}
          >
            SUBMIT
          </Button>
        </ThemeProvider>
      </form>
      <ThemeProvider theme={theme}>
        <Button
          color="secondary"
          variant="contained"
          disableElevation
          style={buttonStyleCancel}
          onClick={changeShowEditModal}
        >
          CANCEL
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default EditModal;

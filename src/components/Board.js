import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import moment from 'moment';
import Column from './Column';
import { boardContext } from '../context/Provider';
import EditModal from './EditModal';

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

const switchDivStyle = {
  position: 'absolute',
  right: 190,
  top: 15,
  display: 'grid',
  width: 100,
  gridGap: 5,
  gridTemplateColumns: 'auto auto auto',
  fontFamily: 'sans-serif',
};

const switchTitleStyle = {
  marginTop: 9,
};

const buttonSaveStyle = {
  width: 100,
  height: 35,
  marginRight: 20,
  marginTop: 2,
};

const buttonSaveStyleHidden = {
  width: 100,
  height: 35,
  marginRight: 20,
  marginTop: 2,
  visibility: 'hidden',
};

const containerStyle = {
  display: 'grid',
  padding: 20,
  height: 650,
  margin: 30,
  marginTop: 50,
  gridGap: 10,
  gridTemplateColumns: 'auto auto auto auto auto auto auto',
  borderRadius: 12,
};

const containerStyleEdit = {
  display: 'grid',
  padding: 20,
  height: 650,
  margin: 30,
  marginTop: 50,
  gridGap: 10,
  gridTemplateColumns: 'auto auto auto auto auto auto auto auto',
  borderRadius: 12,
};

const Board = () => {
  const { data, changeData, show, changeShow } = useContext(boardContext);

  const switchHandler = () => {
    changeShow();
  };

  const onSave = () => {
    console.log('Saving...');
  };

  const onDragEnd = (result) => {
    console.log(moment().add(1, 'days').format('ddd'));
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = source.droppableId;
    const finish = destination.droppableId;

    const draggedSticker = data.find((sticker) => sticker.id === draggableId);

    const filterData = data.filter((sticker) => sticker.id !== draggableId);

    if (start === finish) {
      draggedSticker.order = destination.index;

      const orderedData = filterData.map((sticker) => {
        if (
          sticker.order <= destination.index &&
          sticker.order > source.index
        ) {
          sticker.order--;
        }

        if (
          sticker.order <= source.index &&
          sticker.order >= destination.index
        ) {
          sticker.order++;
        }

        return sticker;
      });

      const newData = [...orderedData, draggedSticker];

      changeData(newData);
      return;
    }

    draggedSticker.day = finish;
    const oldDraggedStickerOrder = draggedSticker.order;
    draggedSticker.order = destination.index;

    filterData.map((sticker) => {
      if (
        sticker.day === source.droppableId &&
        sticker.order > oldDraggedStickerOrder
      ) {
        sticker.order--;
      }

      if (
        sticker.day === destination.droppableId &&
        sticker.order >= destination.index
      ) {
        sticker.order++;
      }
      return sticker;
    });

    const newData = [...filterData, draggedSticker];

    changeData(newData);
  };

  return (
    <div>
      <EditModal />
      <div style={switchDivStyle}>
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={show ? buttonSaveStyle : buttonSaveStyleHidden}
            disableElevation
            onClick={onSave}
          >
            SAVE
          </Button>
          <h3 style={switchTitleStyle}>EDIT</h3>

          <Switch color="primary" onChange={switchHandler} />
        </ThemeProvider>
      </div>
      <div style={show ? containerStyleEdit : containerStyle}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Column
            id={moment().format('ddd')}
            index={1}
            show={true}
            data={data
              .filter((sticker) => sticker.day === moment().format('ddd'))
              .sort((a, b) => a.order - b.order)}
          />
          <Column
            id={moment().add(1, 'days').format('ddd')}
            index={2}
            show={true}
            data={data
              .filter(
                (sticker) =>
                  sticker.day === moment().add(1, 'days').format('ddd')
              )
              .sort((a, b) => a.order - b.order)}
          />
          <Column
            id={moment().add(2, 'days').format('ddd')}
            index={3}
            show={true}
            data={data
              .filter(
                (sticker) =>
                  sticker.day === moment().add(2, 'days').format('ddd')
              )
              .sort((a, b) => a.order - b.order)}
          />
          <Column
            id={moment().add(3, 'days').format('ddd')}
            index={4}
            show={true}
            data={data
              .filter(
                (sticker) =>
                  sticker.day === moment().add(3, 'days').format('ddd')
              )
              .sort((a, b) => a.order - b.order)}
          />
          <Column
            id={moment().add(4, 'days').format('ddd')}
            index={5}
            show={true}
            data={data
              .filter(
                (sticker) =>
                  sticker.day === moment().add(4, 'days').format('ddd')
              )
              .sort((a, b) => a.order - b.order)}
          />
          <Column
            id={moment().add(5, 'days').format('ddd')}
            index={6}
            show={true}
            data={data
              .filter(
                (sticker) =>
                  sticker.day === moment().add(5, 'days').format('ddd')
              )
              .sort((a, b) => a.order - b.order)}
          />
          <Column
            id={moment().add(6, 'days').format('ddd')}
            index={7}
            show={true}
            data={data
              .filter(
                (sticker) =>
                  sticker.day === moment().add(6, 'days').format('ddd')
              )
              .sort((a, b) => a.order - b.order)}
          />
          <Column
            id="Sticker"
            index={8}
            show={show}
            data={data
              .filter((sticker) => sticker.day === 'Sticker')
              .sort((a, b) => a.order - b.order)}
          />
        </DragDropContext>
      </div>
    </div>
  );
};

export default Board;

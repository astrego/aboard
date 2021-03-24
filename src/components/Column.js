import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Sticker from './Sticker';

const itemStyle = {
  fontFamily: 'sans-serif',
  fontSize: 30,
  textAlign: 'center',
  paddingTop: 10,
  borderRadius: 12,
  height: 620,
  width: 140,
  border: '2px solid rgba(61, 165, 217)',
};

const itemStyleActive = {
  fontFamily: 'sans-serif',
  backgroundColor: '#F5F5F5',
  fontSize: 30,
  textAlign: 'center',
  paddingTop: 10,
  borderRadius: 12,
  height: 600,
  width: 140,
  border: '2px solid rgba(61, 165, 217)',
};

const dateStyle = {
  marginTop: 10,
  marginBottom: 10,
};

const stickerColumnStyleHidden = {
  position: 'absolute',
  left: -200,
};

const Column = (props) => {
  return (
    <div style={itemStyle}>
      <h6 style={dateStyle}>{props.id}</h6>
      <Droppable droppableId={props.id}>
        {(provided, snapshot) => (
          <div style={props.show ? {} : stickerColumnStyleHidden}>
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {props.data.map((item, index) => (
                <Sticker
                  key={item.id}
                  index={index}
                  id={item.id}
                  color={item.color}
                  icon={item.icon}
                  day={props.id}
                />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;

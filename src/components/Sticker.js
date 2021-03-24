import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { getStickerIcon } from '../utilities/helper-functions';
import { boardContext } from '../context/Provider';

const stickerStyleEdit = {
  width: 70,
  backgroundColor: 'white',
  margin: 'auto',
  borderRadius: 40,
  cursor: 'grab',
  boxShadow: `0 1px 3px 0 rgba(0, 0, 0, 0.12)`,
};

const Sticker = (props) => {
  let Icon = getStickerIcon(props.icon);

  const { changeShowEditModal, changeStickerId, changeIcon } = useContext(
    boardContext
  );

  const clickHandler = (id, day, icon) => {
    console.log(`ID: ${id} DAY: ${day} ICON: ${icon}`);
    changeStickerId(id);
    changeIcon(icon);
    changeShowEditModal();
  };

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <div style={{ paddingTop: 10 }}>
            <div
              style={stickerStyleEdit}
              onClick={() => clickHandler(props.id, props.day, props.icon)}
            >
              <div
                style={{
                  backgroundColor: props.color,
                  borderRadius: 40,
                  paddingTop: 10,
                  paddingBottom: 5,
                  boxShadow: `0 1px 3px 0 rgba(0, 0, 0, 0.12)`,
                }}
              >
                <Icon style={{ color: 'black', fontSize: 35 }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Sticker;

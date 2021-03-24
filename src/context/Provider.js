import React, { useState } from 'react';

export const boardContext = React.createContext();

const Provider = (props) => {
  const [data, setData] = useState(props.data);
  const [show, setShow] = useState(props.show);
  const [showEditModal, setShowEditModal] = useState(props.showEditModal);
  const [stickerId, setStickerId] = useState(props.stickerId);
  const [icon, setIcon] = useState(props.icon);

  return (
    <boardContext.Provider
      value={{
        data,
        show,
        showEditModal,
        stickerId,
        icon,
        changeData: (newData) => setData(newData),
        changeShow: () => {
          const newShow = !show;
          setShow(newShow);
        },
        changeShowEditModal: () => setShowEditModal(!showEditModal),
        changeStickerId: (id) => {
          setStickerId(id);
        },
        changeIcon: (icon) => {
          setIcon(icon);
        },
      }}
    >
      {props.children}
    </boardContext.Provider>
  );
};

Provider.defaultProps = {
  show: true,
  showEditModal: false,
  stickerId: '',
  icon: '',
  data: [
    {
      icon: 'dog',
      id: 'a-dog',
      order: 0,
      day: 'Sticker',
      color: '#CECECE',
    },
    {
      icon: 'cat',
      id: 'a-cat',
      order: 1,
      day: 'Sticker',
      color: '#CECECE',
    },
    {
      icon: 'female',
      id: 'a-female',
      order: 2,
      day: 'Sticker',
      color: '#CECECE',
    },
    {
      icon: 'male',
      id: 'a-male',
      order: 3,
      day: 'Sticker',
      color: '#CECECE',
    },
    {
      icon: 'home',
      id: 'a-home',
      order: 4,
      day: 'Sticker',
      color: '#CECECE',
    },
    {
      icon: 'exchange',
      id: 'a-exchange',
      order: 5,
      day: 'Sticker',
      color: '#CECECE',
    },
    {
      icon: 'school',
      id: 'a-school',
      order: 6,
      day: 'Sticker',
      color: '#CECECE',
    },
    {
      icon: 'bed',
      id: 'a-bed',
      order: 7,
      day: 'Sticker',
      color: '#CECECE',
    },
  ],
};

export default Provider;

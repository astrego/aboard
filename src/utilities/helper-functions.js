import {
  FaBed,
  FaCat,
  FaDog,
  FaExchangeAlt,
  FaFemale,
  FaHome,
  FaMale,
  FaSchool,
  FaQuestion,
} from 'react-icons/fa';

export const getStickerIcon = (name) => {
  switch (name) {
    case 'bed':
      return FaBed;
    case 'cat':
      return FaCat;
    case 'dog':
      return FaDog;
    case 'exchange':
      return FaExchangeAlt;
    case 'female':
      return FaFemale;
    case 'male':
      return FaMale;
    case 'home':
      return FaHome;
    case 'school':
      return FaSchool;
    default:
      return FaQuestion;
  }
};

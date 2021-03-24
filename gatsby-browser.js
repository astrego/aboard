import React from 'react';
import Provider from './src/context/Provider';

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>;

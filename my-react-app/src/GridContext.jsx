// Extra Points 3: Use Context
import React, { createContext, useState } from 'react';

const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [cells, setCells] = useState([false, false, false, false]);

  const toggleCell = index => {
    setCells(current => {
      const newCells = [...current];
      newCells[index] = !newCells[index];
      return newCells;
    });
  };

  return (
    <GridContext.Provider value={{ cells, toggleCell }}>
      {children}
    </GridContext.Provider>
  );
};

export default GridContext;

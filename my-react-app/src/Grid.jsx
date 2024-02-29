// src/components/Grid.jsx
import React, { useContext } from 'react';
import Cell from './GridCell';
import GridContext from './GridContext';

const Grid = () => {
  const { cells } = useContext(GridContext);
  const onCount = cells.filter(Boolean).length;

  return (
    <>
      <div style={{ marginBottom: '10px' }}>Count: {onCount}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)' }}>
        {cells.map((_, index) => (
          <Cell key={index} index={index} />
        ))}
      </div>
    </>
  );
};

export default Grid;

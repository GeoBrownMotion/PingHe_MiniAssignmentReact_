import React, { useContext } from 'react';
import GridContext from './GridContext';

const Cell = ({ index }) => {
  const { cells, toggleCell } = useContext(GridContext);
  const isOn = cells[index];

  const style = {
    width: '100px',
    height: '100px',
    border: '1px solid grey',
    backgroundColor: isOn ? 'black' : 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return <div style={style} onClick={() => toggleCell(index)} />;
};

export default Cell;

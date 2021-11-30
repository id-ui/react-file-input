import {  useState } from 'react';

export default () => {
  const [isDragging, setDragging] = useState();

  const handleDragEnter = () => {
    setDragging(true);
  }

  const handleDragEnd = () => {
    setDragging(false);
  }

    return {
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragEnd,
    onDragExit: handleDragEnd,
    onDragEnd: handleDragEnd,
    onDrop: handleDragEnd,
    isDragging,
  };
};

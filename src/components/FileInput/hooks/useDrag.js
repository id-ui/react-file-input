import { useCallback, useState } from 'react';

export default () => {
  const [isDragging, setDragging] = useState();

  const handleDragEnter = useCallback(() => {
    setDragging(true);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDragging(false);
  }, []);

  return {
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragEnd,
    onDragExit: handleDragEnd,
    onDragEnd: handleDragEnd,
    onDrop: handleDragEnd,
    isDragging,
  };
};

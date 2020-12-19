import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from './styled';
import { useDrag } from './hooks';

function FileInput({
  onStartUploading,
  onChange,
  onError,
  multiple,
  onUpload,
  ...props
}) {
  let inputRef = useRef();

  const handleChange = useCallback(
    async (e) => {
      const { files } = e.target;

      onStartUploading();

      try {
        if (onUpload) {
          const result = await onUpload(multiple ? files : files[0]);
          if (result) {
            onChange(result);
          }
        } else {
          const reader = new FileReader();

          reader.onload = (progressEvent) =>
            onChange(progressEvent.target.result);

          reader.readAsDataURL(files[0]);
        }
      } catch (e) {
        onError(e);
      }

      inputRef.current.value = null;
    },
    [multiple, onStartUploading, onChange, onUpload, onError]
  );

  return (
    <Input
      onChange={handleChange}
      ref={inputRef}
      multiple={multiple}
      {...props}
    />
  );
}

FileInput.prpTypes = {
  onStartUploading: PropTypes.func,
  onChange: PropTypes.func,
  onError: PropTypes.func,
  onUpload: PropTypes.func,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  accepts: PropTypes.string,
};

FileInput.defaultProps = {
  onStartUploading: () => {},
  onChange: () => {},
  onError: () => {},
  multiple: false,
};

function FileInputWithDraggableContainer({ render, ...props }) {
  const dragContainerProps = useDrag();

  return render({
    dragContainerProps,
    fileInput: <FileInput {...props} />,
  });
}

function FileInputContainer({ children, ...props }) {
  if (typeof children === 'function') {
    return <FileInputWithDraggableContainer render={children} {...props} />;
  } else {
    return <FileInput {...props} />;
  }
}

export default FileInputContainer;

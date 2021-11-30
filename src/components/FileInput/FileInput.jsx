import React, {  useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from './styled';
import { useDrag } from './hooks';
import TooLargeFileError from './errors/TooLargeFileError';

const toMB = (size) => size / 1024 ** 2;

function FileInput({
  onStartUploading,
  onChange,
  onError,
  multiple,
  onUpload,
  maxFileSize,
  ...props
}) {
  const inputRef = useRef();

  const handleChange = async (e) => {
    e.persist();
    const { files } = e.target;

    onStartUploading();

    try {
      if (
          maxFileSize &&
          (multiple ? files : [files[0]]).some(
              (file) => toMB(file.size) > maxFileSize
          )
      ) {
        throw new TooLargeFileError();
      }

      if (onUpload) {
        const result = await onUpload(multiple ? files : files[0], e);
        if (result) {
          onChange(result, files, e);
          inputRef.current.value = null;
        }
      } else {
        const reader = new FileReader();

        reader.onload = (progressEvent) => {
          onChange(progressEvent.target.result, e);
          inputRef.current.value = null;
        };

        reader.readAsDataURL(files[0]);
      }
    } catch (e) {
      onError(e);
    }
  }

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
  accepts: PropTypes.string,
  maxFileSize: PropTypes.number,
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

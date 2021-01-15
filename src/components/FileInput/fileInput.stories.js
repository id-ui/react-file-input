import React, { Fragment, useCallback, useState } from 'react';
import styled from 'styled-components';
import FileInput from './FileInput';
import { UploadArea } from './styled';

export default {
  title: 'FileInput',
  component: FileInput,
  argTypes: {
    onStartUploading: {
      disable: true,
      action: 'onStartUploading',
      description: 'Handler called before uploading started',
    },
    onUpload: {
      disable: true,
      action: 'onUpload',
      description:
        'Handler called with (multiple ? first file : files, event). It should return promise that resoles future onChange result (For example file src)',
    },
    onChange: {
      disable: true,
      action: 'onChange',
      description:
        'Handler called with (result, event), where result is onUpload result or, if onUpload not provided, FileReader result, event is onChange event',
    },
    onError: {
      disable: true,
      action: 'onError',
      description: 'Handler called if an error occurred',
    },
    children: {
      disable: true,
      description:
        'if children is function then it called with { fileInput, dragContainerProps }, you should render fileInput inside drag container and provide drag container with dragContainerProps. There is "isDragging" prop inside dragContainerProps, so you can use it for styling.',
    },
    maxFileSize: {
      control: 'number',
      description:
        'maximum size of file (MB) for uploading (if actual size of file more then onError fired with Error { message: "Too large file" } )',
    },
    accepts: {
      control: 'string',
      description: 'acceptable types of files',
    },
    multiple: {
      control: 'boolean',
      description: 'whether you want fileInput to accept multiple files or not',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    name: {
      control: 'string',
      description: 'input name',
    },
  },
};

export function playground(props) {
  return (
    <Fragment>
      Click on document, play with props, check actions tab
      <FileInput {...props} />
    </Fragment>
  );
}

export function ImageField({ onUpload, onChange, ...props }) {
  const [value, setValue] = useState();

  const handleChange = useCallback(
    (src, e) => {
      setValue(src);
      onChange(src, e);
    },
    [onChange]
  );

  return (
    <UploadArea>
      <FileInput {...props} onChange={handleChange} accept="image/*" />
      {value ? (
        <img alt="" src={value} />
      ) : (
        <span>Drop file here or click to upload</span>
      )}
    </UploadArea>
  );
}

const DragUploadArea = styled(UploadArea)`
  height: 40rem;
  width: 60rem;
  background-color: ${(props) => (props.isDragging ? '#C7F9F1' : '#FFFFFF')};
`;

export function DragAndDrop({ onUpload, ...props }) {
  const [value, setValue] = useState();

  return (
    <FileInput {...props} onChange={setValue} accept="image/*">
      {({ dragContainerProps, fileInput }) => (
        <DragUploadArea {...dragContainerProps}>
          {fileInput}

          {value ? (
            <img alt="" src={value} />
          ) : (
            <span>
              {dragContainerProps.isDragging
                ? 'Drop here'
                : 'Drop file here or click to upload'}
            </span>
          )}
        </DragUploadArea>
      )}
    </FileInput>
  );
}

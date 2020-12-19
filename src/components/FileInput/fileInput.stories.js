import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { withPropsTable } from 'storybook-addon-react-docgen';
import FileInput from './FileInput';
import { UploadArea } from './styled';

export default {
  title: 'FileInput',
  component: FileInput,
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'whether you want fileInput to accept multiple files or not',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    accepts: {
      control: 'string',
      description: 'acceptable types f files',
    },
    name: {
      control: 'string',
      description: 'input name',
    },
    onStartUploading: {
      disable: true,
      action: 'onStartUploading',
      description: 'Function should return promise tht resoles file',
    },
    onUpload: {
      disable: true,
      action: 'onUpload',
      description:
        'Function should return promise that resoles onChange result (For example file src)',
    },
    onChange: {
      disable: true,
      action: 'onChange',
      description:
        'Function called with onUpload result or, if onUpload not provided, FileReader result',
    },
    onError: {
      disable: true,
      action: 'onError',
      description: 'Function called if an error occurred',
    },
    children: {
      disable: true,
      description:
        'if children is function then it called with { fileInput, dragContainerProps }, you should render fileInput inside drag container and provide drag container with dragContainerProps. There is "isDragging" prop inside dragContainerProps, so you can use it for styling.',
    },
  },
  decorators: [withPropsTable],
  parameters: {
    props: {
      propTablesInclude: [FileInput],
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

export function ImageField({ onUpload, ...props }) {
  const [value, setValue] = useState();

  return (
    <UploadArea>
      <FileInput {...props} onChange={setValue} accept="image/*" />
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

# FileInput React Component

[![NPM](https://img.shields.io/npm/v/@idui/react-file-input/.svg)](https://www.npmjs.com/package/@idui/react-file-input/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Coverage Status](https://coveralls.io/repos/github/id-ui/react-file-input/badge.svg?branch=main)](https://coveralls.io/github/id-ui/react-file-input?branch=main)

- [Docs](https://id-ui.github.io/react-file-input/?path=/docs/file-input--playground)
- [Playground](https://id-ui.github.io/react-file-input/?path=/story/file-input--playground)

## Install

```bash
npm install --save @idui/react-file-input
```

```bash
yarn add @idui/react-file-input
```


### See props in [Docs](https://id-ui.github.io/react-file-input/?path=/docs/file-input--playground)


### Basic Example without uploading.

- [Live example](https://id-ui.github.io/react-file-input/?path=/story/fileinput--image-field)
- if onUpload not specified onChange called with FileReader result

```jsx
import React from 'react'
import FileInput, { UploadArea } from '@idui/react-file-input'

function Example() {
  const [src, setSrc] = useState();
  
  return  <UploadArea>
      <FileInput onChange={setValue} accept="image/*" />
      {src ? <img alt="" src={src} /> : <span>Drop file here or click to upload</span>}
  </UploadArea>
}
```

### Basic Example with uploading.

- if onUpload specified then onChange called with onUpload result

```jsx
import React from 'react'
import FileInput, { UploadArea } from '@idui/react-file-input'

function Example() {
  const [src, setSrc] = useState();
  
    // if multiple then here would be files array
    const upload = (file) => {
        // should return Promise
       return  fetch('http://example.com', {
            method: 'POST',
            body: file
        }).then(response => response.json().data.src)
    };
  
  return  <UploadArea>
      <FileInput onChange={setValue} accept="image/*" onUpload={upload} />
      {src ? <img alt="" src={src} /> : <span>Drop file here or click to upload</span>}
  </UploadArea>
}
```

### Custom Upload Area

```jsx
import React from 'react'
import styled from 'styled-components';
import FileInput from '@idui/react-file-input'

const CustomUploadArea = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  backgroun-color: orangered;
  img {
    height: 100%;
    width: auto;
    max-width: 100%;
  }
`

function Example() {
  const [src, setSrc] = useState();
  
  return  <CustomUploadArea>
      <FileInput onChange={setValue} accept="image/*" />
      {src && <img alt="" src={src} />}
  </CustomUploadArea>
}
```

### Show dragging

- [Live example](https://id-ui.github.io/react-file-input/?path=/story/fileinput--drag-and-drop)

```jsx
import React from 'react'
import FileInput, { UploadArea } from '@idui/react-file-input'

const DragUploadArea = styled(UploadArea)`
  height: 40rem;
  width: 60rem;
  background-color: ${props => props.isDragging ? '#C7F9F1' : '#FFFFFF'};
`

export function DragAndDropExample({ onUpload, ...props }) {
    const [value, setValue] = useState();

    return (
        <FileInput {...props} onChange={setValue} accept="image/*" >
            {({ dragContainerProps, fileInput }) =>   <DragUploadArea {...dragContainerProps}>
                {fileInput}

                {value ? <img alt="" src={value} /> : <span>{dragContainerProps.isDragging ? 'Drop here' : 'Drop file here or click to upload'}</span>}
            </DragUploadArea>}
        </FileInput>
    );
}
```

### See more details in [storybook](https://id-ui.github.io/react-file-input/?path=/docs/file-input--playground)

## License

MIT © [kaprisa57@gmail.com](https://github.com/id-ui)
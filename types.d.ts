import * as React from 'react';
import {StyledComponent} from "styled-components";

export const UploadArea: StyledComponent;

export interface DragContainerProps {
    onDragEnter: React.EventHandler<void>;
    onDragLeave: React.EventHandler<void>;
    onDragExit: React.EventHandler<void>;
    onDragEnd: React.EventHandler<void>;
    onDrop: React.EventHandler<void>;
    isDragging: boolean;
}

export interface FileInputChildrenProps {
    dragContainerProps: DragContainerProps;
    fileInput: React.ReactNode;
}

export interface FileInputProps {
    /**
     * handler called before uploading started
     */
    onStartUploading?: () => void;
     /**
     * handler called with (result, event), where result is onUpload result or FileReader result, if onUpload not provided
     */
     onChange?: (src: string | ArrayBuffer | null, event: React.SyntheticEvent) => void;
     /**
     * handler called if an error occurred
     */
     onError?: (error: Error) => void;
     /**
     * handler called with (multiple ? first file : files, event). It should return promise that resoles future onChange result (For example file src)
     */
     onUpload?: (files: File | File[], event: React.SyntheticEvent) => Promise<string>;
     /**
     * whether you want fileInput to accept multiple files or not
      * @default false
     */
     multiple?: boolean;
     /**
     * input name
     */
     name?: string;
     /**
     * acceptable types of files
     */
     accepts?: string;
     /**
     * maximum size of file (MB) for uploading (if actual size of file more then onError fired with Error { message: "Too large file" } )
     */
     maxFileSize?: number;
    /**
     * if children is function then it called with { fileInput, dragContainerProps }, you should render fileInput inside drag container and provide drag container with dragContainerProps. There is "isDragging" prop inside dragContainerProps, so you can use it for styling.
     */
    children?: React.ReactNode | ((FileInputChildrenProps) => React.ReactNode);
}

export default class FileInput extends React.Component<FileInputProps> {}
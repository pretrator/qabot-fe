
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { FILE_UPLOAD_URL } from './../urls'

const { Dragger } = Upload;

const FileUploader: React.FC = () => {
    const props: UploadProps = {
        name: 'file',
        multiple: false,
        action: FILE_UPLOAD_URL,
        maxCount: 1,
        onChange: console.log
      };

  return <Dragger {...props}>
    <p className="ant-upload-drag-icon"><PlusOutlined /></p>
    <p className="ant-upload-text">Click or drag file to this area to start asking question</p>
    <p className="ant-upload-hint">Only Pdf Files are allowed. May crash for files with size greater than 100 MB.</p>
  </Dragger>
}

export default FileUploader;
import React, { Dispatch } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Upload, message } from 'antd';
import { FILE_UPLOAD_URL, attchBackendURL } from '@Src/urls'
import { UploadChangeParam } from 'antd/es/upload';
import { useDispatch } from 'react-redux';
import { fetchConversations } from '@Actions/conversation';
import { ACCEPTED_FILE, FILE_UPLOAD_FAILED } from '@Src/constants';

const { Dragger } = Upload;

interface FileUploaderProps {
    setCurrConv: Dispatch<string | undefined>;
}

const FileUploader = (props: FileUploaderProps) => {
    const { setCurrConv } = props;
    const dispatch = useDispatch()

    const onChange = (info: UploadChangeParam) => {
        const { status, response } = info.file;
        if (status === 'done') {
            fetchConversations(dispatch)
                .then(() => setCurrConv(response.conversationId))
        } else if (status === 'error') {
            message.error(`${info.file.name} ${FILE_UPLOAD_FAILED}`);
        }
    }

    const uploadProps: UploadProps = {
        name: 'file',
        accept: ACCEPTED_FILE,
        multiple: false,
        action: attchBackendURL(FILE_UPLOAD_URL),
        maxCount: 1,
        onChange,
    };

  return <Dragger {...uploadProps}>
    <p className="ant-upload-drag-icon"><PlusOutlined /></p>
    <p className="ant-upload-text">Click or drag file to this area to start asking question</p>
    <p className="ant-upload-hint">Only Pdf Files are allowed.</p>
  </Dragger>
}

export default FileUploader;
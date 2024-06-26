import lodash from 'lodash';

export const FETCH_CONVO = "/conversation/get"
export const FILE_UPLOAD_URL = '/upload/uploadFile'
export const QUERY = "/conversation/query"

export const attchBackendURL = (url: string) => {
    //Do not Destructure
    const  BACKEND_URL = process.env.BACKEND_URL
    if(lodash.isUndefined(BACKEND_URL)) {
        console.log("BACKEND_URL env var is not Set")
    }
    return BACKEND_URL + url;
}
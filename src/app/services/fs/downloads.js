import RNFS from 'react-native-fs';
import { GenerateGuid } from '../../utils/stringUtils';
import RNFetchBlob from 'rn-fetch-blob';

export const getFileExtFromUri = (uri) => {
    if (uri.includes('JPG') || uri.includes('jpg')) {
        return 'jpg';
    }
    else if (uri.includes('PNG') || uri.includes('png')) {
        return 'png';
    }
}
export function memeDownload(uri, fileName, onProgress) {
    console.log('downloading file');
    RNFS.downloadFile({
        fromUrl: uri,
        toFile: RNFS.TemporaryDirectoryPath + '/' + fileName,
        progress: onProgress,
        begin: (data) => { }
    })
}

export function localImageToBase64(path, uploadFn) {
    let data = '';
    RNFetchBlob.fs.readStream(
        // file path
        path,
        // encoding, should be one of `base64`, `utf8`, `ascii`
        'base64',
        // (optional) buffer size, default to 4096 (4095 for BASE64 encoded data)
        // when reading file in BASE64 encoding, buffer size must be multiples of 3.
        4095)
        .then((ifstream) => {
            ifstream.open()
            ifstream.onData((chunk) => {
                // when encoding is `ascii`, chunk will be an array contains numbers
                // otherwise it will be a string
                data += chunk
            })
            ifstream.onError((err) => {
                console.log('oops', err)
            })
            ifstream.onEnd(() => {
                const img = 'data:image/jpg,base64' + data;
            })
        })
}
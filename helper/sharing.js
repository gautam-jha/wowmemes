function getFileNameFromUrl(url) {
    const path = url.split('/').pop();
    return path.split('?')[0];
}

function getFileTypeFromUrl(url) {
    const extension = url.split('.').pop();
    const fileTypes = {
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        mp4: 'video/mp4'
        // Add more file types as needed
    };
    return fileTypes[extension.toLowerCase()] || '';
}

export default async function webShare({ title: text }, mediaUrl) {
    if (navigator.share && mediaUrl) {
        const fileName = getFileNameFromUrl(mediaUrl);
        const fileType = getFileTypeFromUrl(mediaUrl);
        const fileUrl = fileType !== 'video/mp4' ? mediaUrl : `${process.env.PROXY_URL}${mediaUrl}`;

        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const file = new File([blob], fileName, { type: fileType });

        const filesArray = [file];
        navigator.share({ files: filesArray, text, title: 'memeshub' });
    }
}
